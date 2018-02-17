import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpMultiSelectDropdownModule } from './sp-multi-select-dropdown/sp-multi-select-dropdown.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpMultiSelectDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
