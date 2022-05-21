import { TestBed } from '@angular/core/testing';

import { StaticInfoService } from './static-info.service';

describe('StaticInfoService', () => {
  let service: StaticInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
