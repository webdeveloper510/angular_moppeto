import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingActivityComponent } from './trending-activity.component';

describe('TrendingActivityComponent', () => {
  let component: TrendingActivityComponent;
  let fixture: ComponentFixture<TrendingActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
