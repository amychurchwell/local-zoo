import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'age-search',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="oldAnimals">Old Animals</option>
    <option value="youngAnimals">Young Animals</option>
  </select>
  `
})

export class AnimalSearch {

  filterBy: string = "Age";
  @Input() childTaskList: Animal[];
  @Output() clickSender = new EventEmitter();


  onChange(optionFromMenu) {
    this.filterBy = optionFromMenu;
  }

}
