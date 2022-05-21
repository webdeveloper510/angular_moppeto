import { TestBed } from '@angular/core/testing';

import { SubcriptionPriceService } from './subscription-price.service';

describe('SubcriptionPriceService', () => {
  let service: SubcriptionPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcriptionPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
