import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetItemComponent } from './pet-item.component';

describe('PetItemComponent', () => {
  let component: PetItemComponent;
  let fixture: ComponentFixture<PetItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetItemComponent]
    });
    fixture = TestBed.createComponent(PetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
