import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVendorListComponent } from './active-vendor-list.component';

describe('ActiveVendorListComponent', () => {
  let component: ActiveVendorListComponent;
  let fixture: ComponentFixture<ActiveVendorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveVendorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
