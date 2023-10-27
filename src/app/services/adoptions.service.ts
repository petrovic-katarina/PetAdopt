import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Adoption } from '../model/adoption.model';
import { HttpClient } from '@angular/common/http';

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
}
