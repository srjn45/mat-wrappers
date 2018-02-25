import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpTreeviewNodeComponent } from './sp-treeview-node/sp-treeview-node.component';

import { MatIconModule, MatRadioModule, MatCheckboxModule, MatButtonModule } from "@angular/material";
import { SpTreeviewComponent } from './sp-treeview/sp-treeview.component';

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
    SpTreeviewComponent
  ],
  exports: [
    SpTreeviewNodeComponent,
    SpTreeviewComponent
  ]
})
export class SpTreeviewModule { }
