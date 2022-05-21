import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModalMediaAndGroupingsComponent } from './common-modal-media-and-groupings.component';

describe('CommonModalMediaAndGroupingsComponent', () => {
  let component: CommonModalMediaAndGroupingsComponent;
  let fixture: ComponentFixture<CommonModalMediaAndGroupingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonModalMediaAndGroupingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModalMediaAndGroupingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
