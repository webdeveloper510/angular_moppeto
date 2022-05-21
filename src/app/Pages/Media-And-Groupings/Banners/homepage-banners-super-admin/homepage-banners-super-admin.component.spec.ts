import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBannersSuperAdminComponent } from './homepage-banners-super-admin.component';

describe('HomepageBannersSuperAdminComponent', () => {
  let component: HomepageBannersSuperAdminComponent;
  let fixture: ComponentFixture<HomepageBannersSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBannersSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBannersSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
