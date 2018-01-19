import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <form>
    <h3>Add Animal</h3>
    <div class="row">
      <div class="col">
        <div>
          <label>Name:</label><br/>
          <input #newName>
        </div>
        <div>
          <label>Species:</label><br/>
          <input #newSpecies>
        </div>
        <div>
          <label>Age:</label><br/>
          <input #newAge>
        </div>
      </div>
      <div class="col">
        <div>
          <label>Diet:</label><br/>
          <input #newDiet>
        </div>
        <div>
          <label>Location:</label><br/>
          <input #newLocation>
        </div>
        <div>
          <label>Caretakers:</label><br/>
          <input #newCaretakers>
        </div>
      </div>
      <div class="col">
        <div>
          <label>Sex:</label><br/>
          <input #newSex>
        </div>
        <div>
          <label>Likes:</label><br/>
          <input #newLikes>
        </div>
        <div>
          <label>Dislikes:</label><br/>
          <input #newDislikes>
        </div>
      </div>
    </div>
    <button class="btn btn-dark" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Add</button>
  </form>
`
})

export class NewAnimalComponent {
  @Output() newAnimal = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimal.emit(newAnimalToAdd);
  }
}
