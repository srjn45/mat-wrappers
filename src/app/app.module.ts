import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpMultiSelectDropdownModule } from './sp-multi-select-dropdown/sp-multi-select-dropdown.module';
import { SpTreeDropdownModule } from './sp-tree-dropdown/sp-tree-dropdown.module';
import { SpTreeviewModule } from './sp-treeview/sp-treeview.module';
import { MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    SpMultiSelectDropdownModule,
    SpTreeDropdownModule,
    SpTreeviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
