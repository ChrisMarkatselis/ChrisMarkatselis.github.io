import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetBugComponent } from './modules/FirstProject/bug-report-system/get-bug/get-bug.component';
import { EditBugComponent } from './modules/FirstProject/bug-report-system/edit-bug/edit-bug.component';
import { InsertBugComponent} from './modules/FirstProject/bug-report-system/insert-bug/insert-bug.component';
import { PutBugComponent} from './modules/FirstProject/bug-report-system/put-bug/put-bug.component';

const routes: Routes = [
  { path: '', redirectTo: '/bugs', pathMatch: 'full' },
  { path: 'bugs', component: GetBugComponent },
  { path: 'edit/:id', component: EditBugComponent },
  { path: 'update', component: InsertBugComponent },
  { path: 'putComment/:id', component: PutBugComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
