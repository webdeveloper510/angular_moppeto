import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPannelComponent } from './subscription-pannel.component';

describe('SubscriptionPannelComponent', () => {
  let component: SubscriptionPannelComponent;
  let fixture: ComponentFixture<SubscriptionPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
