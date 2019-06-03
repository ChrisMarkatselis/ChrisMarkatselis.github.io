import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bugs} from '../get-bug/bug.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateBugServiceService {

  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  createBugReport(newBug: Bugs) {
    this.http.post(this.endpoint, newBug).subscribe(responseData => {
      console.log(responseData);
    });
  }
}

