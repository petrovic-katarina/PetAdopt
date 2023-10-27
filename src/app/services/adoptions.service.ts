import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Adoption } from '../model/adoption.model';
import { HttpClient } from '@angular/common/http';
import { AdoptionList } from '../model/adoption-list.model';

const baseUrlAdoptions = 'http://localhost:3000/api/adoptions';

@Injectable({
  providedIn: 'root'
})
export class AdoptionsService {

  constructor(private http: HttpClient) { }

  postAdoption(adoption: Adoption): Observable<Adoption> {
    return this.http.post(`${baseUrlAdoptions}`, adoption).pipe(map((data: any) => {
      return new Adoption(data);
    }))
  }

  showAllAdoptions(): Observable<AdoptionList> {
    return this.http.get(`${baseUrlAdoptions}`).pipe(map((data: any) => {
      return new AdoptionList(data)
    }))
  }


  // http://localhost:3000/api/adoptions/:id
  deleteAdoption(id: number): Observable<Adoption> {
    return this.http.delete(`${baseUrlAdoptions}/${id}`).pipe(map((data: any) => {
      return new Adoption(data);
    }))
  }
}
