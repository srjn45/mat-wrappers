import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpTreeDropdownComponent } from './sp-tree-dropdown/sp-tree-dropdown.component';

import { TreeviewModule } from "ngx-treeview";

@NgModule({
  imports: [
    CommonModule,
    TreeviewModule.forRoot()
  ],
  declarations: [SpTreeDropdownComponent],
  exports: [
    SpTreeDropdownComponent
  ]
})
export class SpTreeDropdownModule { }
