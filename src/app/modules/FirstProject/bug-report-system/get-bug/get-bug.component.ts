import { Component, OnInit } from '@angular/core';
import {GetBugService} from './get-bug.service';
import {Bugs} from './bug.model';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
bugs: Bugs[];

  constructor(private getBug: GetBugService) { }

  ngOnInit() {
    this.getBug.getBugReport().subscribe((data) => {
      this.bugs = data;
    });
  }

}
