import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatIconModule, MatButtonModule, MatRadioModule } from "@angular/material";
import { SpTreeDropdownComponent } from './sp-tree-dropdown/sp-tree-dropdown.component';

import { TreeviewModule } from "ngx-treeview";

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    TreeviewModule.forRoot()
  ],
  declarations: [SpTreeDropdownComponent],
  exports: [
    SpTreeDropdownComponent
  ]
})
export class SpTreeDropdownModule { }
