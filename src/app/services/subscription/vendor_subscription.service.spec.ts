import { TestBed } from '@angular/core/testing';

import { VendorSubscriptionService } from './vendor_subscription.service';

describe('VendorService', () => {
  let service: VendorSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
