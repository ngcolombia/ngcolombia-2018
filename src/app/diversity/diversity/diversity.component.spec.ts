import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversityComponent } from './diversity.component';

describe('DiversityComponent', () => {
  let component: DiversityComponent;
  let fixture: ComponentFixture<DiversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
