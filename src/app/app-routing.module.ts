import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetBugComponent } from './modules/FirstProject/bug-report-system/get-bug/get-bug.component';
import { IncertBugComponent } from './modules/FirstProject/bug-report-system/incert-bug/incert-bug.component';
import {UpdateBugComponent} from './modules/FirstProject/bug-report-system/update-bug/update-bug.component';
import {PutBugComponent} from './modules/FirstProject/bug-report-system/put-bug/put-bug.component';

const routes: Routes = [
  { path: '', redirectTo: '/bugs', pathMatch: 'full' },
  { path: 'bugs', component: GetBugComponent },
  { path: 'edit/:id', component: IncertBugComponent },
  { path: 'update', component: UpdateBugComponent },
  {path: 'putComment/:id', component: PutBugComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
