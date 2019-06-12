import { Component, OnInit } from '@angular/core';
import { SearchBarService } from './search-bar.service';
import { Router } from '@angular/router';
import { Bugs } from '../get-bug/bug.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchBar = {
    title: '',
    priority: '',
    reporter: '',
    status: ''
  };

  constructor(private searchBugService: SearchBarService, private router: Router) { }

  ngOnInit() {
  }

  onSearch(searchBar) {
    const newBug: any = {
      title: searchBar.title,
      priority: searchBar.priority,
      reporter: searchBar.reporter,
      status: searchBar.statuss
    };
    this.searchBugService.searchBug(newBug.title, newBug.priority, newBug.reporter, newBug.statuss).subscribe((col) => {
      this.router.navigate(['bugs']);
    });

  }
}
