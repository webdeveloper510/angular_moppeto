import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingRevenueBannersComponent } from './advertising-revenue-banners.component';

describe('AdvertisingRevenueBannersComponent', () => {
  let component: AdvertisingRevenueBannersComponent;
  let fixture: ComponentFixture<AdvertisingRevenueBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingRevenueBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingRevenueBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
