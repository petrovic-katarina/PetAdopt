import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { AdoptionsComponent } from './pets/adoptions/adoptions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: 'adoptions', component: AdoptionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
