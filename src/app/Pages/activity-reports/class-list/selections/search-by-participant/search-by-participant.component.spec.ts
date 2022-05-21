import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByParticipantComponent } from './search-by-participant.component';

describe('SearchByParticipantComponent', () => {
  let component: SearchByParticipantComponent;
  let fixture: ComponentFixture<SearchByParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
