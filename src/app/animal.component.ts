import { Component } from '@angular/core';

@Component({
 selector: 'animal',
 templateUrl: './animal.component.html'
})

export class Animal {
  public pintsRemaining: number = 124;
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string
  ){ }
}
