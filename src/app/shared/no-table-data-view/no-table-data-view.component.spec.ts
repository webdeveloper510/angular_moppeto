import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTableDataViewComponent } from './no-table-data-view.component';

describe('NoTableDataViewComponent', () => {
  let component: NoTableDataViewComponent;
  let fixture: ComponentFixture<NoTableDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTableDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTableDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
