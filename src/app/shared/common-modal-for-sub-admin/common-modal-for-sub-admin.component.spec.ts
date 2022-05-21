import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModalForSubAdminComponent } from './common-modal-for-sub-admin.component';

describe('CommonModalForSubAdminComponent', () => {
  let component: CommonModalForSubAdminComponent;
  let fixture: ComponentFixture<CommonModalForSubAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonModalForSubAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModalForSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
