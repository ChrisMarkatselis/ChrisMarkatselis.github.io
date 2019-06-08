import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bugs} from './bug.model';

@Injectable({
  providedIn: 'root'
})
export class GetBugService {

  constructor(private http: HttpClient) { }

  getBugReport(): Observable<Bugs[]> {
    return this.http.get<Bugs[]>('http://bug-report-system-server.herokuapp.com/bugs?size=100');
  }

  getBugReportSorted(sortBy, sortingDirection): Observable<Bugs[]> {
    return this.http.get<Bugs[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=' + sortBy + ',' + sortingDirection + '&size=100');
  }
  // getBugByFilter(): Observable<Bugs[]> {
  //   return this.http.get<Bugs[]>('https://bug-report-system-server.herokuapp.com/bugs?title=bug&priority=1&reporter=QA&status=Done');
  // }
}
