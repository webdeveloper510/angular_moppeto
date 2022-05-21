import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesTabNavComponent } from './attributes-tab-nav.component';

describe('AttributesTabNavComponent', () => {
  let component: AttributesTabNavComponent;
  let fixture: ComponentFixture<AttributesTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesTabNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
