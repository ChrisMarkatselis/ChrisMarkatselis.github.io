import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bugs } from '../get-bug/bug.model';
import { InsertBugService } from './insert-bug.service';

@Component({
  selector: 'app-insert-bug',
  templateUrl: './insert-bug.component.html',
  styleUrls: ['./insert-bug.component.css']
})
export class InsertBugComponent implements OnInit {

  selectedPriority = null;
  selectedStatus = null;
  selectedReporter = null;

  priorityOptions = [
    { key: 1, priority: 'Critical' },
    { key: 2, priority: 'Major' },
    { key: 3, priority: 'Minor' }
  ];

  reporterOptions = [
    { key: 'QA', reporter: 'QA' },
    { key: 'PO', reporter: 'PO' },
    { key: 'Dev', reporter: 'Dev' }
  ];

  statusOptions = [
    { key: 'Ready for test', statuss: 'Ready for test' },
    { key: 'Done', statuss: 'Done' },
    { key: 'Rejected', statuss: 'Rejected' }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private insertBugService: InsertBugService) { }

  ngOnInit() {
  }
  onUpdate(updateform) {
    const date = new Date();
    const newBug: Bugs = {
      title: updateform.title,
      description: updateform.description,
      priority: updateform.priority,
      reporter: updateform.reporter,
      status: updateform.statuss,
      createdAt: date.toString()
    };
    console.log(newBug);
    this.insertBugService.createBugReport(newBug);
    this.router.navigate(['bugs']);
  }
}
