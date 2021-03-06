import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentService } from './shared/student.service';
import { StudentListComponent } from './students/student-list/student-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule,FirestoreSettingsToken } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './shared/post.service';
//Angular Material Components
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { from } from 'rxjs';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { StudentsAttendanceComponent } from './students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from './students/view-attendance/view-attendance.component';
import { FeesComponent } from './students/fees/fees.component';
import { ViewPastStudentsComponent } from './students/view-past-students/view-past-students.component';
import { DashboardFrameComponent } from './dashboard/dashboard-frame/dashboard-frame.component';
import { ForumComponent } from './forum/forum.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';
import { ForumAdminsComponent } from './forum-admin/forum-admins/forum-admins.component';
import { ForumAdminListComponent } from './forum-admin/forum-admin-list/forum-admin-list.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploadTaskComponent } from './forum-admin/upload-task/upload-task.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { DataTablesModule } from 'angular-datatables';
import { GalleryComponent } from './forum/gallery/gallery.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { NewsforumComponent } from './newsforum/newsforum.component';
import { AdminNewsforumComponent } from './newsforum/admin-newsforum/admin-newsforum.component';
import { AuthService } from './shared/auth.service';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent } from './chat/chat.component';
import { TeacherattendenceComponent } from './teachers/teacherattendence/teacherattendence.component';
import { ViewTeacherAttendanceComponent } from './teachers/view-teacher-attendance/view-teacher-attendance.component';
import { SalaryCalculationComponent } from './salary-calculation/salary-calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    DashboardComponent,
    TeachersComponent,
    TeacherComponent,
    TeacherListComponent,
    StudentsAttendanceComponent,
    ViewAttendanceComponent,
    FeesComponent,
    ViewPastStudentsComponent,
    DashboardFrameComponent,
    DashboardComponent,
    ChatComponent,
    ForumComponent,
    ForumAdminComponent,
    ForumAdminsComponent,
    ForumAdminListComponent,
    DropzoneDirective,
    UploadTaskComponent,
    GalleryComponent,
    LoginComponent,
    SignupComponent,
    NewsforumComponent,
    AdminNewsforumComponent,
    VerifyEmailComponent,
    TeacherattendenceComponent,
    ViewTeacherAttendanceComponent,
    SalaryCalculationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    DataTablesModule,
    //material modules
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
  ],
  providers: [MatDatepickerModule,AngularFireStorage,AngularFireDatabase,{ provide: FirestoreSettingsToken, useValue: {} },AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }