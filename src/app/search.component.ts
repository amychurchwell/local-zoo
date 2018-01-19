import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';

@Component({
  selector: 'age-search',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="young">Young</option>
    <option value="old">Old</option>
  </select>
  `
})

export class AnimalSearch {

  filterByAge: string = "young";
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();


  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
