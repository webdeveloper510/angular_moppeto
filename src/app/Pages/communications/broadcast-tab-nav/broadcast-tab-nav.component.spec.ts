import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastTabNavComponent } from './broadcast-tab-nav.component';

describe('BroadcastTabNavComponent', () => {
  let component: BroadcastTabNavComponent;
  let fixture: ComponentFixture<BroadcastTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastTabNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
