import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'age-search',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="old">Old (2<)</option>
    <option value="young">Young (<2)</option>
  </select>
  `
})

export class AnimalSearch {

  filterByAge: number;
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();


  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
