import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PetSearchResult } from '../model/pet-search-result.model';
import { Pet } from '../model/pet.model';

const baseUrl = 'http://localhost:3000/api/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  // GET http://localhost:3000/api/pets

  getAllPets(): Observable<PetSearchResult> {
    return this.http.get(`${baseUrl}`).pipe(map((data: any) => {
      return new PetSearchResult(data)
    }))
  }

  getOnePet(id: number): Observable<Pet> {
    return this.http.get(`${baseUrl}/${id}`).pipe(map((data: any) => {
      return new Pet(data)
    }))
  }

}
