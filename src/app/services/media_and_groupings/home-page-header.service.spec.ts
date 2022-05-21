import { TestBed } from '@angular/core/testing';

import { HomePageHeaderService } from './home-page-header.service';

describe('HomePageHeaderService', () => {
  let service: HomePageHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
