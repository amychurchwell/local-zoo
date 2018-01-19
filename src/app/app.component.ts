import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalSearch } from './search.component';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Animal Tracker';
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud Noises'),
    new Animal('Panda', 'Oreo', 5, 'Omnivore', 'China', 8, 'Male', 'Bamboo', 'Data Entry')
  ];
  selectedAnimal = null;
  addButton = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal){
  this.animals.push(newAnimalFromChild);
}

}
