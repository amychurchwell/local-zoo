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
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the Sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];
  selectedAnimal = null;
  addButton = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal){
  this.animals.push(newAnimalFromChild);
}

addButtonClick() {
  this.addButton = !this.addButton;
}

animalDiet(animal){
  if(animal.diet === "Herbivore"){
    return "badge badge-pill badge-success";
  }else if (animal.diet === "Carnivore"){
    return "badge badge-pill badge-danger";
  }else{
    return "badge badge-pill badge-secondary";
  }
}

}
