import { TestBed } from '@angular/core/testing';

import { EvenemetService } from './evenemet.service';

describe('EvenemetService', () => {
  let service: EvenemetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenemetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
