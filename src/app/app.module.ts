import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { NewAnimalComponent } from './new-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    NewAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
