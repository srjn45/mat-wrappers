import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpTreeviewNodeComponent } from './sp-treeview-node/sp-treeview-node.component';

import { MatIconModule, MatRadioModule, MatCheckboxModule, MatButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  declarations: [
    SpTreeviewNodeComponent
  ],
  exports: [SpTreeviewNodeComponent]
})
export class SpTreeviewModule { }
