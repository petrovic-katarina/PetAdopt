import { TestBed } from '@angular/core/testing';

import { AdoptionsService } from './adoptions.service';

describe('AdoptionsService', () => {
  let service: AdoptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
