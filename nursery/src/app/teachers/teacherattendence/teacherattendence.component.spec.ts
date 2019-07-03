import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherattendenceComponent } from './teacherattendence.component';

describe('TeacherattendenceComponent', () => {
  let component: TeacherattendenceComponent;
  let fixture: ComponentFixture<TeacherattendenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherattendenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
