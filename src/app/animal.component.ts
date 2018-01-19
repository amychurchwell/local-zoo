import { Component } from '@angular/core';

@Component({
 selector: 'test',
 templateUrl: './animal.component.html'
})
export class AnimalComponent {
 constructor() {}

 name: string = 'Animal Component';
}
