import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bugs} from '../get-bug/bug.model';

@Injectable({
  providedIn: 'root'
})
export class PutBugService {
private  readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  putBugComment(newBug: Bugs) {
    this.http.put(this.endpoint, newBug).subscribe(responseData =>{
      console.log(responseData);
    });
  }
}
