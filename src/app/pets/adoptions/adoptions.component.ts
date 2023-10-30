import { Component, OnInit } from '@angular/core';
import { AdoptionList } from 'src/app/model/adoption-list.model';
import { Adoption } from 'src/app/model/adoption.model';
import { AdoptionsService } from 'src/app/services/adoptions.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  count!: number;
  adoptions: AdoptionList = new AdoptionList();

  constructor(private adoptionsService: AdoptionsService) { }

  ngOnInit(): void {
    this.showAllAdoptions();
  }

  showAllAdoptions() {
    this.adoptionsService.showAllAdoptions().subscribe({
      next: (adoption: AdoptionList) => {
        this.count = adoption.count;
        this.adoptions = adoption;
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }

  approveAdopt(id: number) {
    this.adoptionsService.deleteAdoption(id).subscribe({
      next: (adoption: Adoption) => {
        this.showAllAdoptions();
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }

}
