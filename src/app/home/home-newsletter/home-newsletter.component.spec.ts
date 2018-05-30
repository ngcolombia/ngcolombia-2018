import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsletterComponent } from './home-newsletter.component';

describe('HomeNewsletterComponent', () => {
  let component: HomeNewsletterComponent;
  let fixture: ComponentFixture<HomeNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
