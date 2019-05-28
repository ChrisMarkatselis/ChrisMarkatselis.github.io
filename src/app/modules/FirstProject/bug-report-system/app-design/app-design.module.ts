import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
  declarations: [WrapperComponent, HeaderComponent, NavigationComponent, ContentComponent, FooterComponent, BugListComponent],
  imports: [
    CommonModule
  ],
  exports: [WrapperComponent]
})
export class AppDesignModule { }
