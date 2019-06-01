import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBugComponent } from './get-bug/get-bug.component';
import { IncertBugComponent } from './incert-bug/incert-bug.component';
import { DeleteBugComponent } from './delete-bug/delete-bug.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [GetBugComponent, IncertBugComponent, DeleteBugComponent, UpdateBugComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [
    DeleteBugComponent,
    IncertBugComponent,
    GetBugComponent,
    UpdateBugComponent
  ]
})
export class BugReportSystemModule { }
