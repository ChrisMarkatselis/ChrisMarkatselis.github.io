import { Component, OnInit } from '@angular/core';
import { GetBugService } from './get-bug.service';
import { Bugs } from '../app-design/bug-list/bug.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  private readonly getBugByIdURL = 'https://bug-report-system-server.herokuapp.com/bugs/';

  constructor(private getBug: GetBugService, private router: Router) { }
  bugs: Bugs[];
  sortingDirection = 'asc';
  sortByVar: string;
  p = 1;

  ngOnInit() {
    this.getBug.getBugReport().subscribe((data) => {
      this.bugs = data;
    });
  }
  sort(sortBy) {
    if (this.sortingDirection === 'asc') {
      this.sortingDirection = 'desc';
    } else {
      this.sortingDirection = 'asc';
    }
    this.sortByVar = sortBy;
    this.getBug.getBugReportSorted(sortBy, this.sortingDirection).subscribe((data) => {
      this.bugs = data;
    });
  }

  editBugMethod(id){
    this.router.navigate(['edit', id]);
    console.log(this.getBugByIdURL + id);
  }

  InsertNewBug(){
    this.router.navigate(['insert'])
  }
}
