import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { SpSelectComponent } from './sp-select/sp-select.component';


@NgModule({
  declarations: [
    AppComponent,
    SpSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
