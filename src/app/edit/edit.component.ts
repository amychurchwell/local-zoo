import { Component, Input } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() animal: Animal;

  constructor() { }


  }

}
