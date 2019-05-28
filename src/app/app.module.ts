import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BugReportSystemModule} from './modules/FirstProject/bug-report-system/bug-report-system.module';
import { AppDesignModule } from './modules/FirstProject/bug-report-system/app-design/app-design.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BugReportSystemModule,
    AppDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
