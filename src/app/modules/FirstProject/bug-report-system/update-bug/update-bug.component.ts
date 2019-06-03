import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UpdateBugServiceService} from './update-bug-service.service';
import {Bugs} from '../get-bug/bug.model';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {

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
    { key: 'Ready for test', status: 'Ready for test' },
    { key: 'Done', status: 'Done' },
    { key: 'Rejected', status: 'Rejected' }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private updateBugService: UpdateBugServiceService) { }

  ngOnInit() {
  }
  onUpdate(updateform) {
   const date = new Date();
   const newBug: Bugs = {
      title: updateform.title,
      description: updateform.description,
      priority: updateform.priority,
      reporter: updateform.reporter,
      status: updateform.status,
      createdAt: date.toString()
    };
   console.log(newBug);
   this.updateBugService.createBugReport(newBug);
  }
  // this.updateBugServise.createBugReport(newBug);
  // this.router.navigate(['bugs']);
  //  this.updateBugService.createBugReport(this.newBug).subscribe(x => this.value);
  //  console.log(updateform.value);
  //  this.newBug = this.value;
  //  console.log(this.newBug);
}
