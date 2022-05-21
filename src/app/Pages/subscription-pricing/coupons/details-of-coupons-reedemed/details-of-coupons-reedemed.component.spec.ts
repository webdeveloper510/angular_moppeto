import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfCouponsReedemedComponent } from './details-of-coupons-reedemed.component';

describe('DetailsOfCouponsReedemedComponent', () => {
  let component: DetailsOfCouponsReedemedComponent;
  let fixture: ComponentFixture<DetailsOfCouponsReedemedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfCouponsReedemedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfCouponsReedemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
