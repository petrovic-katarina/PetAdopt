import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PetSearchResult } from '../model/pet-search-result.model';

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
}
