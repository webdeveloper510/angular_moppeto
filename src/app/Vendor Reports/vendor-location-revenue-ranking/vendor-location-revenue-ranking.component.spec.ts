import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLocationRevenueRankingComponent } from './vendor-location-revenue-ranking.component';

describe('VendorLocationRevenueRankingComponent', () => {
  let component: VendorLocationRevenueRankingComponent;
  let fixture: ComponentFixture<VendorLocationRevenueRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorLocationRevenueRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLocationRevenueRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
