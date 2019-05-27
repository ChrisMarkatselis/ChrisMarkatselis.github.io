import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBugComponent } from './get-bug/get-bug.component';
import { IncertBugComponent } from './incert-bug/incert-bug.component';
import { DeleteBugComponent } from './delete-bug/delete-bug.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';

@NgModule({
  declarations: [GetBugComponent, IncertBugComponent, DeleteBugComponent, UpdateBugComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DeleteBugComponent,
    IncertBugComponent,
    GetBugComponent,
    UpdateBugComponent
  ]
})
export class BugReportSystemModule { }
