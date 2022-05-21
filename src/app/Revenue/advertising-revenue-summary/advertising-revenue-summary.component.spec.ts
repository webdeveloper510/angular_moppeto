import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingRevenueSummaryComponent } from './advertising-revenue-summary.component';

describe('AdvertisingRevenueSummaryComponent', () => {
  let component: AdvertisingRevenueSummaryComponent;
  let fixture: ComponentFixture<AdvertisingRevenueSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingRevenueSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingRevenueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
