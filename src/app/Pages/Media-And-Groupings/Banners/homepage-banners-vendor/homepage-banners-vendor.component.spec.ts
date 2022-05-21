import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBannersVendorComponent } from './homepage-banners-vendor.component';

describe('HomepageBannersVendorComponent', () => {
  let component: HomepageBannersVendorComponent;
  let fixture: ComponentFixture<HomepageBannersVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBannersVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBannersVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
