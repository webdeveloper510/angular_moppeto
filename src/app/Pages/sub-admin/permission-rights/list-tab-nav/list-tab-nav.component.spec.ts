import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTabNavComponent } from './list-tab-nav.component';

describe('ListTabNavComponent', () => {
  let component: ListTabNavComponent;
  let fixture: ComponentFixture<ListTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTabNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
