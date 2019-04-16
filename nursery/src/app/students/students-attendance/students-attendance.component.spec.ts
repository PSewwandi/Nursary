import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAttendanceComponent } from './students-attendance.component';

describe('StudentsAttendanceComponent', () => {
  let component: StudentsAttendanceComponent;
  let fixture: ComponentFixture<StudentsAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
