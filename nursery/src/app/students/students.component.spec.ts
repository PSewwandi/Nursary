import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { AdminNewsforumComponent } from '../newsforum/admin-newsforum/admin-newsforum.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { UploadTaskComponent } from '../forum-admin/upload-task/upload-task.component';
import { ForumAdminComponent } from '../forum-admin/forum-admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardFrameComponent } from '../dashboard/dashboard-frame/dashboard-frame.component';
import { NewsforumComponent } from '../newsforum/newsforum.component';
import { ForumAdminsComponent } from '../forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from '../forum-admin/forum-admin-list/forum-admin-list.component';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from '../teachers/teachers.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { FeesComponent } from './fees/fees.component';
import { ViewPastStudentsComponent } from './view-past-students/view-past-students.component';
import { ForumComponent } from '../forum/forum.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherComponent } from '../teachers/teacher/teacher.component';
import { TeacherListComponent } from '../teachers/teacher-list/teacher-list.component';
import { GalleryComponent } from '../forum/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
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
import { SignupComponent } from '../signup/signup.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNewsforumComponent,LoginComponent,HomeComponent,UploadTaskComponent,ForumAdminComponent,DashboardComponent,DashboardFrameComponent,NewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,GalleryComponent,SignupComponent,VerifyEmailComponent],
      imports: [FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule,ToastrModule.forRoot(),MatNativeDateModule,BrowserAnimationsModule,HttpClientModule],
      providers: [AngularFireModule,AngularFirestore,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' }]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
