import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingRevenueSearchWordsComponent } from './advertising-revenue-search-words.component';

describe('AdvertisingRevenueSearchWordsComponent', () => {
  let component: AdvertisingRevenueSearchWordsComponent;
  let fixture: ComponentFixture<AdvertisingRevenueSearchWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingRevenueSearchWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingRevenueSearchWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
