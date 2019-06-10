import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bugs} from './bug.model';

@Injectable({
  providedIn: 'root'
})
export class GetBugService {

  constructor(private http: HttpClient) { }

  private readonly endpoint = 'http://bug-report-system-server.herokuapp.com/bugs';

  getBugReport(): Observable<Bugs[]> {
    return this.http.get<Bugs[]>(this.endpoint);
  }

  getBugReportSorted(sortBy, sortingDirection): Observable<Bugs[]> {
    return this.http.get<Bugs[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=' + sortBy + ',' + sortingDirection);
  }

}
