import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/model/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent {

  @Input() pets: Pet = new Pet();

}
