import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBugComponent } from './get-bug/get-bug.component';
import { IncertBugComponent } from './incert-bug/incert-bug.component';
import { DeleteBugComponent } from './delete-bug/delete-bug.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PutBugComponent } from './put-bug/put-bug.component';

@NgModule({
  declarations: [GetBugComponent, IncertBugComponent, DeleteBugComponent, UpdateBugComponent, PutBugComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    DeleteBugComponent,
    IncertBugComponent,
    GetBugComponent,
    UpdateBugComponent,
    PutBugComponent
  ]
})
export class BugReportSystemModule { }
