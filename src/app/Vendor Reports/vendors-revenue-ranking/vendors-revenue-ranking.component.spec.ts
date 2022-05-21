import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsRevenueRankingComponent } from './vendors-revenue-ranking.component';

describe('VendorsRevenueRankingComponent', () => {
  let component: VendorsRevenueRankingComponent;
  let fixture: ComponentFixture<VendorsRevenueRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsRevenueRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsRevenueRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
