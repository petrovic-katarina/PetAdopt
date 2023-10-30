import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { PetsComponent } from './pets/pets.component';
import { PetItemComponent } from './pets/pet-item/pet-item.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { AdoptionsComponent } from './pets/adoptions/adoptions.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SidebarComponent,
    PetsComponent,
    PetItemComponent,
    PetDetailsComponent,
    AdoptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
