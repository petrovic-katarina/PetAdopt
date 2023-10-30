import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet.model';
import { AdoptionsService } from 'src/app/services/adoptions.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit, OnDestroy {

  pet_id!: number;
  pet: Pet = new Pet();
  subscriptionOnePet: Subscription = new Subscription();

  petAdoption: Adoption = new Adoption();
  subsAdoption: Subscription = new Subscription();

  constructor(private petsService: PetsService, private route: ActivatedRoute, private adoptionsService: AdoptionsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pet_id = params['id']
      this.getOnePet();
    })
  }

  pet_form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required, Validators.email])
  })

  get name() {
    return this.pet_form.get('name');
  }

  get contact() {
    return this.pet_form.get('contact');
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

  onSubmit() {
    this.petAdoption = new Adoption(this.pet_form.value);
    this.petAdoption.petId = this.pet_id;
    this.petAdoption.petName = this.pet.name;

    this.subsAdoption = this.adoptionsService.postAdoption(this.petAdoption).subscribe({
      next: (adoption: Adoption) => {
        this.petAdoption = adoption;
        // console.log(this.petAdoption);
        this.pet_form.reset();
        this.router.navigate(['/adoptions']);
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }

  ngOnDestroy(): void {
    this.subsAdoption.unsubscribe();
  }

}
