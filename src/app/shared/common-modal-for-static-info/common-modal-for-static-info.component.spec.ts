import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModalForStaticInfoComponent } from './common-modal-for-static-info.component';

describe('CommonModalForStaticInfoComponent', () => {
  let component: CommonModalForStaticInfoComponent;
  let fixture: ComponentFixture<CommonModalForStaticInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonModalForStaticInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModalForStaticInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
