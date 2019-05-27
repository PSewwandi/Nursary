import { TestBed, async, inject } from '@angular/core/testing';

import { ParentGuard } from './parent.guard';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { StudentComponent } from 'src/app/students/student/student.component';
import { StudentsComponent } from 'src/app/students/students.component';
import { TeachersComponent } from 'src/app/teachers/teachers.component';
import { StudentsAttendanceComponent } from 'src/app/students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from 'src/app/students/view-attendance/view-attendance.component';
import { FeesComponent } from 'src/app/students/fees/fees.component';
import { ViewPastStudentsComponent } from 'src/app/students/view-past-students/view-past-students.component';
import { ForumComponent } from 'src/app/forum/forum.component';
import { DashboardFrameComponent } from 'src/app/dashboard/dashboard-frame/dashboard-frame.component';
import { StudentListComponent } from 'src/app/students/student-list/student-list.component';
import { TeacherComponent } from 'src/app/teachers/teacher/teacher.component';
import { TeacherListComponent } from 'src/app/teachers/teacher-list/teacher-list.component';
import { ForumAdminComponent } from 'src/app/forum-admin/forum-admin.component';
import { NewsforumComponent } from 'src/app/newsforum/newsforum.component';
import { AdminNewsforumComponent } from 'src/app/newsforum/admin-newsforum/admin-newsforum.component';
import { GalleryComponent } from 'src/app/forum/gallery/gallery.component';
import { ForumAdminsComponent } from 'src/app/forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from 'src/app/forum-admin/forum-admin-list/forum-admin-list.component';
import { UploadTaskComponent } from 'src/app/forum-admin/upload-task/upload-task.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule, MatDividerModule, MatInputModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { SignupComponent } from 'src/app/signup/signup.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { ChatComponent } from 'src/app/chat/chat.component';

describe('ParentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[ChatComponent,HomeComponent,LoginComponent,DashboardComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,ForumAdminComponent,NewsforumComponent,AdminNewsforumComponent,GalleryComponent,ForumAdminsComponent,ForumAdminListComponent,UploadTaskComponent,SignupComponent,VerifyEmailComponent],
      providers: [ParentGuard,{ provide: APP_BASE_HREF, useValue : '/' }],
      imports:[FormsModule,AppRoutingModule,MatIconModule,MatDividerModule,BrowserAnimationsModule,ReactiveFormsModule,MatInputModule,MatCardModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,MatExpansionModule,DataTablesModule]
    
    });
  });

  it('should ...', inject([ParentGuard], (guard: ParentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
