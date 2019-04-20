import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastStudentsComponent } from './view-past-students.component';

describe('ViewPastStudentsComponent', () => {
  let component: ViewPastStudentsComponent;
  let fixture: ComponentFixture<ViewPastStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
