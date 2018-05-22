import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersListComponent } from './speakers.component';

describe('SpeakersComponent', () => {
  let component: SpeakersListComponent;
  let fixture: ComponentFixture<SpeakersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakersListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
