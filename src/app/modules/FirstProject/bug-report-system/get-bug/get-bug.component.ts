import { Component, OnInit } from '@angular/core';
import { GetBugService } from './get-bug.service';
import { Bugs } from './bug.model';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {

  constructor(private getBug: GetBugService) { }
  bugs: Bugs[];
  sortingDirection = 'asc';

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
    this.getBug.getBugReportSorted(sortBy, this.sortingDirection).subscribe((data) => {
      this.bugs = data;
    });
  }
}
