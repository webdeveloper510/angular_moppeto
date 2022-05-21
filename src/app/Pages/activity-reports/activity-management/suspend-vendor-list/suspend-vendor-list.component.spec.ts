import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendVendorListComponent } from './suspend-vendor-list.component';

describe('SuspendVendorListComponent', () => {
  let component: SuspendVendorListComponent;
  let fixture: ComponentFixture<SuspendVendorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendVendorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
