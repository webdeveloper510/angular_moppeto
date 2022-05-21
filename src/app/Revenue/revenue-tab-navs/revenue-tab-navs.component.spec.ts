import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTabNavsComponent } from './revenue-tab-navs.component';

describe('RevenueTabNavsComponent', () => {
  let component: RevenueTabNavsComponent;
  let fixture: ComponentFixture<RevenueTabNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueTabNavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueTabNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
