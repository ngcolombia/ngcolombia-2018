import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGirlsComponent } from './ng-girls.component';

describe('NgGirlsComponent', () => {
  let component: NgGirlsComponent;
  let fixture: ComponentFixture<NgGirlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGirlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
