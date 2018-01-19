import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
    <h3>Add Animal</h3>
    <div>
      <label>Name:</label><br/>
      <input #newName>
    </div>
    <div>
      <label>Species:</label><br/>
      <input #newSpecies>
    </div>
    <button class="btn btn-dark" (click)="submitForm(newName.value, newSpecies.value);">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimal = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimal.emit(newAnimalToAdd);
  }
}
