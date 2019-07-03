import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadTaskComponent } from './upload-task.component';
import { ForumAdminComponent } from '../forum-admin.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardFrameComponent } from 'src/app/dashboard/dashboard-frame/dashboard-frame.component';
import { NewsforumComponent } from 'src/app/newsforum/newsforum.component';
import { AdminNewsforumComponent } from 'src/app/newsforum/admin-newsforum/admin-newsforum.component';
import { ForumAdminsComponent } from '../forum-admins/forum-admins.component';
import { ForumAdminListComponent } from '../forum-admin-list/forum-admin-list.component';
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
import { GalleryComponent } from 'src/app/forum/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatExpansionModule, MatNativeDateModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore, FirestoreSettingsToken } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from 'src/app/signup/signup.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { ChatComponent } from 'src/app/chat/chat.component';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';



describe('UploadTaskComponent', () => {
  let component: UploadTaskComponent;
  let fixture: ComponentFixture<UploadTaskComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent,UploadTaskComponent,ForumAdminComponent,DashboardComponent,DashboardFrameComponent,NewsforumComponent,AdminNewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,LoginComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,GalleryComponent,SignupComponent,VerifyEmailComponent],
      imports: [FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule,ToastrModule.forRoot(),MatNativeDateModule,BrowserAnimationsModule,HttpClientModule],
      providers: [AngularFireModule,AngularFirestore,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
