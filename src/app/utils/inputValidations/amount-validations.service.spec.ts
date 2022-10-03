import { TestBed } from '@angular/core/testing';

import { AmountValidationsService } from './amount-validations.service';

describe('AmountValidationsService', () => {
  let service: AmountValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmountValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
