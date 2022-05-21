import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabNavsComponent } from './user-tab-navs.component';

describe('UserTabNavsComponent', () => {
  let component: UserTabNavsComponent;
  let fixture: ComponentFixture<UserTabNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabNavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
