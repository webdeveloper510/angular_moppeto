import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModalForBroadcastComponent } from './common-modal-for-broadcast.component';

describe('CommonModalForBroadcastComponent', () => {
  let component: CommonModalForBroadcastComponent;
  let fixture: ComponentFixture<CommonModalForBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonModalForBroadcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModalForBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
