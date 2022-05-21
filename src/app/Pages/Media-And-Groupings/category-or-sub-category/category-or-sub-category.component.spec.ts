import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOrSubCategoryComponent } from './category-or-sub-category.component';

describe('CategoryOrSubCategoryComponent', () => {
  let component: CategoryOrSubCategoryComponent;
  let fixture: ComponentFixture<CategoryOrSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryOrSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryOrSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
