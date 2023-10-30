import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Subscription } from 'rxjs';
import { Pet } from '../model/pet.model';
import { PetSearchResult } from '../model/pet-search-result.model';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit, OnDestroy {

  count: number = 0;
  pets: Pet[] = [];

  subscriptionAllPets: Subscription = new Subscription();

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  queryParams = {
    sort: '',
    filter: {
      category: '',
      sex: ''
    }
  }

  getAllPets() {
    this.subscriptionAllPets = this.petsService.getAllPets(this.queryParams).subscribe({
      next: (searchResult: PetSearchResult) => {
        this.count = searchResult.count;
        this.pets = searchResult.results;
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }

  getCategory(category: any) {
    this.queryParams.filter.category = category.target.value;
    this.getAllPets();
  }

  getSex(sex: any) {
    this.queryParams.filter.sex = sex.target.value;
    this.getAllPets();
  }

  sortPets(sortBy: any) {
    this.queryParams.sort = sortBy.target.value;
    this.getAllPets();
  }

  ngOnDestroy(): void {
    this.subscriptionAllPets.unsubscribe();
  }

}
