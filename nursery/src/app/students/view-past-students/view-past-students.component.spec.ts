import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastStudentsComponent } from './view-past-students.component';
import { AdminNewsforumComponent } from 'src/app/newsforum/admin-newsforum/admin-newsforum.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { UploadTaskComponent } from 'src/app/forum-admin/upload-task/upload-task.component';
import { ForumAdminComponent } from 'src/app/forum-admin/forum-admin.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardFrameComponent } from 'src/app/dashboard/dashboard-frame/dashboard-frame.component';
import { NewsforumComponent } from 'src/app/newsforum/newsforum.component';
import { ForumAdminsComponent } from 'src/app/forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from 'src/app/forum-admin/forum-admin-list/forum-admin-list.component';
import { StudentComponent } from '../student/student.component';
import { StudentsComponent } from '../students.component';
import { TeachersComponent } from 'src/app/teachers/teachers.component';
import { StudentsAttendanceComponent } from '../students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from '../view-attendance/view-attendance.component';
import { FeesComponent } from '../fees/fees.component';
import { ForumComponent } from 'src/app/forum/forum.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { TeacherComponent } from 'src/app/teachers/teacher/teacher.component';
import { TeacherListComponent } from 'src/app/teachers/teacher-list/teacher-list.component';
import { GalleryComponent } from 'src/app/forum/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatExpansionModule, MatNativeDateModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { APP_BASE_HREF } from '@angular/common';
import { SignupComponent } from 'src/app/signup/signup.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { ChatComponent } from 'src/app/chat/chat.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('ViewPastStudentsComponent', () => {
  let component: ViewPastStudentsComponent;
  let fixture: ComponentFixture<ViewPastStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent,AdminNewsforumComponent,LoginComponent,HomeComponent,UploadTaskComponent,ForumAdminComponent,DashboardComponent,DashboardFrameComponent,NewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,GalleryComponent,SignupComponent,VerifyEmailComponent],
      imports: [AngularFireAuthModule,FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule,ToastrModule.forRoot(),MatNativeDateModule,BrowserAnimationsModule,HttpClientModule],
      providers: [AngularFireModule,AngularFirestore,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' }]
    
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
