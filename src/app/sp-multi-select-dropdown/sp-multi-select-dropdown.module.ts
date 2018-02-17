import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpMultiSelectDropdownComponent } from './sp-multi-select-dropdown/sp-multi-select-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatIconModule, MatChipsModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [SpMultiSelectDropdownComponent],
  exports: [SpMultiSelectDropdownComponent]
})
export class SpMultiSelectDropdownModule { }
