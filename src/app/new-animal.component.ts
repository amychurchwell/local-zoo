import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Works</h1>
  `
})

export class NewAnimalComponent {
  @Output() newAnimal = new EventEmitter();
}
