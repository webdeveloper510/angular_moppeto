import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPricingComponent } from './banner-pricing.component';

describe('BannerPricingComponent', () => {
  let component: BannerPricingComponent;
  let fixture: ComponentFixture<BannerPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
