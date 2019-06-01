import { Component, OnInit } from '@angular/core';
import { GetBugService } from './get-bug.service';
import { Bugs } from './bug.model';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  private readonly getBugByIdURL = 'https://bug-report-system-server.herokuapp.com/bugs/';

  constructor(private getBug: GetBugService) { }
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

    console.log(this.getBugByIdURL + id);
  }
}
