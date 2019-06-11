import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bugs } from '../get-bug/bug.model';

@Injectable({
  providedIn: 'root'
})

export class SearchBarService {

  private readonly endpoint = 'http://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  searchBug(title, priority, reporter, status): Observable<Bugs[]> {
    console.log(title, priority, reporter, status);
    return this.http.get<Bugs[]>(this.endpoint + '?&title=' + title + '?&priority=' + priority + '?&reporter=' + reporter + '?&status=' + status);
  }


}
