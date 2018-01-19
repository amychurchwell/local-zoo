import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'age-search',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="2">Old (2<)</option>
    <option value="100">Young (<2)</option>
  </select>
  `
})

export class AnimalSearch {

  filterBy: number;
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();


  onChange(optionFromMenu) {
    this.filterBy = optionFromMenu;
  }

}
