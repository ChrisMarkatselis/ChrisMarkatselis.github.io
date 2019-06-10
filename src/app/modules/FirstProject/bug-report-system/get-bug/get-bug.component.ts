import { Component, OnInit } from '@angular/core';
import { GetBugService } from './get-bug.service';
import { Bugs } from './bug.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  private readonly getBugByIdURL = 'https://bug-report-system-server.herokuapp.com/bugs/';

  constructor(private getBugService: GetBugService, private router: Router) { }
  bugs: Bugs[];
  sortingDirection = 'asc';
  sortByVar: string;
  page: number;
  // bugsNext and bugsNextSorted are being used in pagination, to check if the next page has bugs.
  bugsNext: Bugs[] = [];
  bugsNextSorted: Bugs[] = [];
  trueIfNotSorted = true;

  ngOnInit() {
    this.page = 0;
    this.getBugService.getBugReport(this.page).subscribe((data) => {
      this.bugs = data;
      this.bugsNext = data;
    });
  }

  sort(sortBy: string) {
    this.page = 0;
    if (this.sortingDirection === 'asc') {
      this.sortingDirection = 'desc';
    } else {
      this.sortingDirection = 'asc';
    }
    this.sortByVar = sortBy;
    this.getBugService.getBugReportSorted(sortBy, this.sortingDirection, this.page).subscribe((data) => {
      this.bugs = data;
      this.bugsNextSorted = data;
    });
    this.trueIfNotSorted = false;
  }

  nextPage() {
    // The next condition checks if sort method has been called, so to do the pagination due to sorting or not
    if (this.trueIfNotSorted) {
      this.getBugService.getBugReport(this.page + 1).subscribe((data) => {
        this.bugsNext = data;
      });
      if (Object.keys(this.bugsNext).length > 0 && Object.keys(this.bugs).length === 10) {
        this.page += 1;
      }
      this.getBugService.getBugReport(this.page).subscribe((data) => {
        this.bugs = data;
      });
    } else {
      // When bugs are sorted
      this.getBugService.getBugReportSorted(this.sortByVar, this.sortingDirection, this.page + 1).subscribe((data) => {
        this.bugsNextSorted = data;
      });
      if (Object.keys(this.bugsNextSorted).length > 0 && Object.keys(this.bugs).length === 10) {
        this.page += 1;
      }
      this.getBugService.getBugReportSorted(this.sortByVar, this.sortingDirection, this.page).subscribe((data) => {
        this.bugs = data;
      });
    }
  }

  previousPage() {
    // The next condition checks if sort method has been called, so to do the pagination due to sorting or not
    if (this.trueIfNotSorted) {
      if (this.page > 0) {
        this.page -= 1;
      }
      this.getBugService.getBugReport(this.page).subscribe((data) => {
        this.bugs = data;
      });
    } else {
      if (this.page > 0) {
        this.page -= 1;
      }
      this.getBugService.getBugReportSorted(this.sortByVar, this.sortingDirection, this.page).subscribe((data) => {
        this.bugs = data;
      });
    }
  }

  editBugMethod(id) {
    this.router.navigate(['edit', id]);
  }

  insertBug() {
    this.router.navigate(['update']);
  }

}
