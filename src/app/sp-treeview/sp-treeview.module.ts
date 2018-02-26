import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpTreeviewNodeComponent } from './sp-treeview-node/sp-treeview-node.component';

import { MatIconModule, MatRadioModule, MatCheckboxModule, MatButtonModule } from "@angular/material";
import { SpTreeviewComponent } from './sp-treeview/sp-treeview.component';
import { SpTreeviewDropdownComponent } from './sp-treeview-dropdown/sp-treeview-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  declarations: [
    SpTreeviewNodeComponent,
    SpTreeviewComponent,
    SpTreeviewDropdownComponent
  ],
  exports: [
    SpTreeviewNodeComponent,
    SpTreeviewComponent,
    SpTreeviewDropdownComponent
  ]
})
export class SpTreeviewModule { }
