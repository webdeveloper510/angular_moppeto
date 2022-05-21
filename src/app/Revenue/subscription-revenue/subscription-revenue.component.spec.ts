import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionRevenueComponent } from './subscription-revenue.component';

describe('SubscriptionRevenueComponent', () => {
  let component: SubscriptionRevenueComponent;
  let fixture: ComponentFixture<SubscriptionRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
