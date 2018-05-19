import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersBioComponent } from './speakers-bio.component';

describe('SpeakersBioComponent', () => {
  let component: SpeakersBioComponent;
  let fixture: ComponentFixture<SpeakersBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
