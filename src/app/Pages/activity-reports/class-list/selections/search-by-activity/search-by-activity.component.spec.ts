import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByActivityComponent } from './search-by-activity.component';

describe('SearchByActivityComponent', () => {
  let component: SearchByActivityComponent;
  let fixture: ComponentFixture<SearchByActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
