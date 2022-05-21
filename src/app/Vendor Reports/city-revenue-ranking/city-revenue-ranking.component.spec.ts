import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRevenueRankingComponent } from './city-revenue-ranking.component';

describe('CityRevenueRankingComponent', () => {
  let component: CityRevenueRankingComponent;
  let fixture: ComponentFixture<CityRevenueRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityRevenueRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityRevenueRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
