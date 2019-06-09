import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from '../chat.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardFrameComponent } from 'src/app/dashboard/dashboard-frame/dashboard-frame.component';
import { ForumAdminComponent } from 'src/app/forum-admin/forum-admin.component';
import { NewsforumComponent } from 'src/app/newsforum/newsforum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatMenuModule, MatExpansionModule, MatProgressSpinnerModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { AdminNewsforumComponent } from 'src/app/newsforum/admin-newsforum/admin-newsforum.component';
import { ReplyComponent } from '../reply/reply.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { GalleryComponent } from 'src/app/forum/gallery/gallery.component';
import { UploadTaskComponent } from 'src/app/forum-admin/upload-task/upload-task.component';
import { TeacherListComponent } from 'src/app/teachers/teacher-list/teacher-list.component';
import { TeacherComponent } from 'src/app/teachers/teacher/teacher.component';
import { ForumComponent } from 'src/app/forum/forum.component';
import { ViewPastStudentsComponent } from 'src/app/students/view-past-students/view-past-students.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { FeesComponent } from 'src/app/students/fees/fees.component';
import { ViewAttendanceComponent } from 'src/app/students/view-attendance/view-attendance.component';
import { StudentsAttendanceComponent } from 'src/app/students/students-attendance/students-attendance.component';
import { environment } from 'src/environments/environment.prod';
import { ForumAdminsComponent } from 'src/app/forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from 'src/app/forum-admin/forum-admin-list/forum-admin-list.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TeachersComponent } from 'src/app/teachers/teachers.component';
import { StudentComponent } from 'src/app/students/student/student.component';
import { StudentsComponent } from 'src/app/students/students.component';
import { StudentListComponent } from 'src/app/students/student-list/student-list.component';
import { ComposeComponent } from '../compose/compose.component';


describe('ReplyComponent', () => {
  let component: ReplyComponent;
  let fixture: ComponentFixture<ReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent,ComposeComponent,DashboardComponent,DashboardFrameComponent,ForumAdminComponent,NewsforumComponent,AdminNewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,LoginComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,UploadTaskComponent,GalleryComponent,SignupComponent,VerifyEmailComponent,ReplyComponent,ComposeComponent],
      imports: [FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,DataTablesModule,MatExpansionModule,ToastrModule.forRoot(),AngularFireAuthModule],
      providers: [AngularFireModule,AngularFirestore,{ provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
