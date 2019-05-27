import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import { ChatComponent } from '../chat/chat.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StudentComponent } from '../students/student/student.component';
import { StudentsComponent } from '../students/students.component';
import { TeachersComponent } from '../teachers/teachers.component';
import { StudentsAttendanceComponent } from '../students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from '../students/view-attendance/view-attendance.component';
import { FeesComponent } from '../students/fees/fees.component';
import { ViewPastStudentsComponent } from '../students/view-past-students/view-past-students.component';
import { ForumComponent } from '../forum/forum.component';
import { DashboardFrameComponent } from '../dashboard/dashboard-frame/dashboard-frame.component';
import { StudentListComponent } from '../students/student-list/student-list.component';
import { TeacherComponent } from '../teachers/teacher/teacher.component';
import { TeacherListComponent } from '../teachers/teacher-list/teacher-list.component';
import { ForumAdminComponent } from '../forum-admin/forum-admin.component';
import { NewsforumComponent } from '../newsforum/newsforum.component';
import { AdminNewsforumComponent } from '../newsforum/admin-newsforum/admin-newsforum.component';
import { GalleryComponent } from '../forum/gallery/gallery.component';
import { ForumAdminsComponent } from '../forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from '../forum-admin/forum-admin-list/forum-admin-list.component';
import { UploadTaskComponent } from '../forum-admin/upload-task/upload-task.component';
import { SignupComponent } from '../signup/signup.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { ParentGuard } from './guard/parent.guard';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule, MatDividerModule, MatInputModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

describe('MessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[ChatComponent,HomeComponent,LoginComponent,DashboardComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,ForumAdminComponent,NewsforumComponent,AdminNewsforumComponent,GalleryComponent,ForumAdminsComponent,ForumAdminListComponent,UploadTaskComponent,SignupComponent,VerifyEmailComponent],
      providers: [AngularFireModule,AngularFirestore,AngularFireDatabase,ParentGuard,{ provide: APP_BASE_HREF, useValue : '/' }],
      imports:[FormsModule,AppRoutingModule,MatIconModule,MatDividerModule,BrowserAnimationsModule,ReactiveFormsModule,MatInputModule,MatCardModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,MatExpansionModule,DataTablesModule,AngularFireModule.initializeApp(environment.firebaseConfig)]
    
  }));

  it('should be created', () => {
    const service: MessagesService = TestBed.get(MessagesService);
    expect(service).toBeTruthy();
  });
});
