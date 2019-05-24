import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsforumComponent } from './admin-newsforum.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { UploadTaskComponent } from 'src/app/forum-admin/upload-task/upload-task.component';
import { ForumAdminComponent } from 'src/app/forum-admin/forum-admin.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardFrameComponent } from 'src/app/dashboard/dashboard-frame/dashboard-frame.component';
import { NewsforumComponent } from '../newsforum.component';
import { ForumAdminsComponent } from 'src/app/forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from 'src/app/forum-admin/forum-admin-list/forum-admin-list.component';
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
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { APP_BASE_HREF } from '@angular/common';

describe('AdminNewsforumComponent', () => {
  let component: AdminNewsforumComponent;
  let fixture: ComponentFixture<AdminNewsforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNewsforumComponent,LoginComponent,HomeComponent,UploadTaskComponent,ForumAdminComponent,DashboardComponent,DashboardFrameComponent,NewsforumComponent,ForumAdminsComponent,ForumAdminListComponent,HomeComponent,StudentComponent,StudentsComponent,TeachersComponent,StudentsAttendanceComponent,ViewAttendanceComponent,FeesComponent,ViewPastStudentsComponent,ForumComponent,DashboardFrameComponent,StudentListComponent,TeacherComponent,TeacherListComponent,GalleryComponent],
      imports: [FormsModule,AppRoutingModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule,AngularFireModule.initializeApp(environment.firebaseConfig),DataTablesModule,MatExpansionModule,ToastrModule.forRoot(),MatNativeDateModule,BrowserAnimationsModule,HttpClientModule],
      providers: [AngularFireModule,AngularFirestore,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' }]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
