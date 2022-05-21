import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSubscriptionComponent } from './custom-subscription.component';

describe('CustomSubscriptionComponent', () => {
  let component: CustomSubscriptionComponent;
  let fixture: ComponentFixture<CustomSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
