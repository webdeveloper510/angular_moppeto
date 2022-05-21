import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourCalendarComponent } from './hour-calendar.component';

describe('HourCalendarComponent', () => {
  let component: HourCalendarComponent;
  let fixture: ComponentFixture<HourCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
