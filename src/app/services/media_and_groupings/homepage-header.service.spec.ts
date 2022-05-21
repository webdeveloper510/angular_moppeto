import { TestBed } from '@angular/core/testing';

import { HomepageHeaderService } from './homepage-header.service';

describe('HomepageHeaderService', () => {
  let service: HomepageHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
