import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Subscription } from 'rxjs';
import { Pet } from '../model/pet.model';
import { PetSearchResult } from '../model/pet-search-result.model';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  count: number = 0;
  pets: Pet[] = [];

  subscriptionAllPets: Subscription = new Subscription();

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets() {
    this.subscriptionAllPets = this.petsService.getAllPets().subscribe({
      next: (searchResult: PetSearchResult) => {
        this.count = searchResult.count;
        this.pets = searchResult.results;
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }

}
