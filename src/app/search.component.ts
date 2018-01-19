import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgePipe } from './age.pipe';


@Component({
  selector: 'age-search',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="young">Young</option>
    <option value="old">Old</option>
    <option value="all" selected="selected">All</option>
  </select>
  `
})

export class AnimalSearch {

  filterByAge: string = "all";
  @Input() animals: Animal[];
  @Output() clickSender = new EventEmitter();


  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }


}
