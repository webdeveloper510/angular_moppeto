import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersTabNavComponent } from './banners-tab-nav.component';

describe('BannersTabNavComponent', () => {
  let component: BannersTabNavComponent;
  let fixture: ComponentFixture<BannersTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersTabNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
