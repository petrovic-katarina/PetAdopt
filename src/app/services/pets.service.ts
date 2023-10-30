import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAllPets(params?: any): Observable<PetSearchResult> {

    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set("filter", params.filter && JSON.stringify(params.filter) || "")
          .set('sort', params.sort || '')
      }
    }
    return this.http.get(`${baseUrl}`, options).pipe(map((data: any) => {
      return new PetSearchResult(data)
    }))
  }

  getOnePet(id: number): Observable<Pet> {
    return this.http.get(`${baseUrl}/${id}`).pipe(map((data: any) => {
      return new Pet(data)
    }))
  }

}
