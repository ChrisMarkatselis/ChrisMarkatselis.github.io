import { Routes } from '@angular/router';
import { GetBugComponent } from './modules/FirstProject/bug-report-system/get-bug/get-bug.component';
import { NewPageComponent } from './modules/FirstProject/bug-report-system/new-page/new-page.component';

export const routes: Routes = [
  { path: 'home', component: GetBugComponent  },
  { path: 'edit/:id', component: NewPageComponent },
  { path: 'insert', component:  }
]
