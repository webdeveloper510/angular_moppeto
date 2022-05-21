import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAgeGroupComponent } from './add-edit-age-group.component';

describe('AddEditAgeGroupComponent', () => {
  let component: AddEditAgeGroupComponent;
  let fixture: ComponentFixture<AddEditAgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAgeGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
