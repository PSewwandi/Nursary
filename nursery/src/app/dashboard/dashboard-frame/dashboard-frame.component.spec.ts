import { VerifyEmailComponent } from './../../verify-email/verify-email.component';
import { SignupComponent } from './../../signup/signup.component';
import { ForumAdminListComponent } from './../../forum-admin/forum-admin-list/forum-admin-list.component';
import { ForumAdminsComponent } from './../../forum-admin/forum-admins/forum-admins.component';
import { AdminNewsforumComponent } from './../../newsforum/admin-newsforum/admin-newsforum.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFrameComponent } from './dashboard-frame.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { DashboardComponent } from '../dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { StudentComponent } from 'src/app/students/student/student.component';
import { StudentsComponent } from 'src/app/students/students.component';
import { TeachersComponent } from 'src/app/teachers/teachers.component';
import { StudentsAttendanceComponent } from 'src/app/students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from 'src/app/students/view-attendance/view-attendance.component';
import { FeesComponent } from 'src/app/students/fees/fees.component';
import { ViewPastStudentsComponent } from 'src/app/students/view-past-students/view-past-students.component';
import { ForumComponent } from 'src/app/forum/forum.component';
import { StudentListComponent } from 'src/app/students/student-list/student-list.component';
import { TeacherComponent } from 'src/app/teachers/teacher/teacher.component';
import { TeacherListComponent } from 'src/app/teachers/teacher-list/teacher-list.component';
import { ForumAdminComponent } from 'src/app/forum-admin/forum-admin.component';
import { NewsforumComponent } from 'src/app/newsforum/newsforum.component';
import { UploadTaskComponent } from 'src/app/forum-admin/upload-task/upload-task.component';
import { DataTablesModule } from 'angular-datatables';
import { GalleryComponent } from 'src/app/forum/gallery/gallery.component';
import { ChatComponent } from 'src/app/chat/chat.component';
import { AngularFireAuthModule } from '@angular/fire/auth';


describe('DashboardFrameComponent', () => {
  let component: DashboardFrameComponent;
  let fixture: ComponentFixture<DashboardFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireAuthModule,FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule],
      providers: [AngularFireModule,AngularFirestore,{ provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [ChatComponent,DashboardFrameComponent,ForumAdminComponent,NewsforumComponent,AdminNewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,DashboardComponent,HomeComponent,LoginComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,UploadTaskComponent,GalleryComponent,SignupComponent,VerifyEmailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
