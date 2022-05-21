import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreaRegionComponent } from './add-area-region.component';

describe('AddAreaRegionComponent', () => {
  let component: AddAreaRegionComponent;
  let fixture: ComponentFixture<AddAreaRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAreaRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAreaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
