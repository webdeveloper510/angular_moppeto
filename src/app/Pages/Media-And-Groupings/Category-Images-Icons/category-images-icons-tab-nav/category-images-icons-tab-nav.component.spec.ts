import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryImagesIconsTabNavComponent } from './category-images-icons-tab-nav.component';

describe('CategoryImagesIconsTabNavComponent', () => {
  let component: CategoryImagesIconsTabNavComponent;
  let fixture: ComponentFixture<CategoryImagesIconsTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryImagesIconsTabNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryImagesIconsTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
