import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRevenueRankingComponent } from './activity-revenue-ranking.component';

describe('ActivityRevenueRankingComponent', () => {
  let component: ActivityRevenueRankingComponent;
  let fixture: ComponentFixture<ActivityRevenueRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRevenueRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRevenueRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
