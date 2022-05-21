import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeadersTabNavComponent } from './homepage-headers-tab-nav.component';

describe('HomepageHeadersTabNavComponent', () => {
  let component: HomepageHeadersTabNavComponent;
  let fixture: ComponentFixture<HomepageHeadersTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageHeadersTabNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHeadersTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
