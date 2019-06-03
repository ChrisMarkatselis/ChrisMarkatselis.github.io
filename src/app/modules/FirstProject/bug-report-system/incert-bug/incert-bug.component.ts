import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IncertBugService } from './incert-bug.service';
import { Bugs } from '../get-bug/bug.model';

@Component({
  selector: 'app-incert-bug',
  templateUrl: './incert-bug.component.html',
  styleUrls: ['./incert-bug.component.css']
})
export class IncertBugComponent implements OnInit {
  savedId: any;
  editBug: Bugs[];
  selectedPriority = null;
  selectedReporter = null;
  selectedStatus = null;

  priorityOptions = [
    { key: 1, name: 'Critical' },
    { key: 2, name: 'Major' },
    { key: 3, name: 'Minor' }
  ];

  reporterOptions = [
    { key: 'QA', name: 'QA' },
    { key: 'PO', name: 'PO' },
    { key: 'DEV', name: 'DEV' },
  ];

  statusOptions = [
    { key: 'Ready for test', name: 'Ready for test' },
    { key: 'Done', name: 'Done' },
    { key: 'Rejected', name: 'Rejected' },
  ];

  constructor(private route: ActivatedRoute, private incertBugService: IncertBugService, private router: Router) {
    this.savedId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.incertBugService.getBugReport(this.savedId).subscribe((col) => {
      this.editBug = col;
      this.selectedPriority = col.priority;
      this.selectedReporter = col.reporter;
      this.selectedStatus = col.status;
    });
  }
  onChangePriority(e) {
    this.editBug.priority = e;
    this.selectedPriority = e;
  }
  onChangeReporter(e) {
    this.editBug.reporter = e;
    this.selectedReporter = e;
  }
  onChangeStatus(e) {
    this.editBug.status = e;
    this.selectedStatus = e;
  }
  onSubmit(f: { value: any; valid: any; }) {
    this.incertBugService.updateBugReport(this.savedId, this.editBug ).subscribe((col) => {
      this.router.navigate(['bugs']);
    });
  }
}
