import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPricingComponent } from './trending-pricing.component';

describe('TrendingPricingComponent', () => {
  let component: TrendingPricingComponent;
  let fixture: ComponentFixture<TrendingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
