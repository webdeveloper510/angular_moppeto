import { TestBed } from '@angular/core/testing';

import { MarketingPricingService } from './marketing-pricing.service';

describe('MarketingPricingService', () => {
  let service: MarketingPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketingPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
