import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeadersVendorComponent } from './homepage-headers-vendor.component';

describe('HomepageHeadersVendorComponent', () => {
  let component: HomepageHeadersVendorComponent;
  let fixture: ComponentFixture<HomepageHeadersVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageHeadersVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHeadersVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
