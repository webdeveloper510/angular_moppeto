import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeadersSuperAdminComponent } from './homepage-headers-super-admin.component';

describe('HomepageHeadersSuperAdminComponent', () => {
  let component: HomepageHeadersSuperAdminComponent;
  let fixture: ComponentFixture<HomepageHeadersSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageHeadersSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHeadersSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
