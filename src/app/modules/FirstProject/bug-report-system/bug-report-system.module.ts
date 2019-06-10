import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBugComponent } from './get-bug/get-bug.component';
import { EditBugComponent } from './edit-bug/edit-bug.component';
import { DeleteBugComponent } from './delete-bug/delete-bug.component';
import { InsertBugComponent } from './insert-bug/insert-bug.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PutBugComponent } from './put-bug/put-bug.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    GetBugComponent,
    EditBugComponent,
    DeleteBugComponent,
    InsertBugComponent,
    PutBugComponent,
    HeaderComponent,
    FooterComponent],

  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],

  exports: [
    DeleteBugComponent,
    EditBugComponent,
    GetBugComponent,
    InsertBugComponent,
    PutBugComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class BugReportSystemModule { }
