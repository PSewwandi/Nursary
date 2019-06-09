import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardFrameComponent } from '../dashboard/dashboard-frame/dashboard-frame.component';
import { ForumAdminComponent } from '../forum-admin/forum-admin.component';
import { NewsforumComponent } from '../newsforum/newsforum.component';
import { AdminNewsforumComponent } from '../newsforum/admin-newsforum/admin-newsforum.component';
import { ForumAdminsComponent } from '../forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from '../forum-admin/forum-admin-list/forum-admin-list.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { StudentComponent } from '../students/student/student.component';
import { StudentsComponent } from '../students/students.component';
import { TeachersComponent } from '../teachers/teachers.component';
import { StudentsAttendanceComponent } from '../students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from '../students/view-attendance/view-attendance.component';
import { FeesComponent } from '../students/fees/fees.component';
import { ViewPastStudentsComponent } from '../students/view-past-students/view-past-students.component';
import { ForumComponent } from '../forum/forum.component';
import { StudentListComponent } from '../students/student-list/student-list.component';
import { TeacherComponent } from '../teachers/teacher/teacher.component';
import { TeacherListComponent } from '../teachers/teacher-list/teacher-list.component';
import { UploadTaskComponent } from '../forum-admin/upload-task/upload-task.component';
import { GalleryComponent } from '../forum/gallery/gallery.component';
import { SignupComponent } from '../signup/signup.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { APP_BASE_HREF } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
<<<<<<< HEAD
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
=======
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReplyComponent } from './reply/reply.component';
import { ComposeComponent } from './compose/compose.component';
>>>>>>> 7fd27a0d1d463fcdeb0abcb1a8a750bd5d6120c4

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ChatComponent,DashboardComponent,DashboardFrameComponent,ForumAdminComponent,NewsforumComponent,AdminNewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,LoginComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,UploadTaskComponent,GalleryComponent,SignupComponent,VerifyEmailComponent],
      imports: [DataTablesModule,FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule,ToastrModule.forRoot()],
=======
      declarations: [ChatComponent,DashboardComponent,DashboardFrameComponent,ForumAdminComponent,NewsforumComponent,AdminNewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,LoginComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,UploadTaskComponent,GalleryComponent,SignupComponent,VerifyEmailComponent,ReplyComponent,ComposeComponent],
      imports: [FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule,ToastrModule.forRoot(),AngularFireAuthModule],
>>>>>>> 7fd27a0d1d463fcdeb0abcb1a8a750bd5d6120c4
      providers: [AngularFireModule,AngularFirestore,{ provide: APP_BASE_HREF, useValue : '/' }]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
