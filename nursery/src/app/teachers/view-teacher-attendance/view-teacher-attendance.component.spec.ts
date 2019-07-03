import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherAttendanceComponent } from './view-teacher-attendance.component';

describe('ViewTeacherAttendanceComponent', () => {
  let component: ViewTeacherAttendanceComponent;
  let fixture: ComponentFixture<ViewTeacherAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeacherAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
