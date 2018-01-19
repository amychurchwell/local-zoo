import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';
import { AnimalSearch } from './search.component';
import { NewAnimalComponent } from './new-animal.component';


@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], ageSearch) {
    var output: Animal[] = [];
    if(ageSearch === "young") {
      console.log("young");
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (ageSearch === "old") {
      console.log("old");
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
