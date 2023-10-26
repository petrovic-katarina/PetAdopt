import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/model/pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet_id!: number;
  pet: Pet = new Pet();
  subscriptionOnePet: Subscription = new Subscription();


  constructor(private petsService: PetsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pet_id = params['id']
      this.getOnePet();
    })

  }

  getOnePet() {
    this.subscriptionOnePet = this.petsService.getOnePet(this.pet_id).subscribe({
      next: (pet: Pet) => {
        this.pet = pet;
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }

}
