import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsAttendanceComponent } from './students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from './students/view-attendance/view-attendance.component';
import { FeesComponent } from './students/fees/fees.component';
import { ViewPastStudentsComponent } from './students/view-past-students/view-past-students.component';
import { ForumComponent } from './forum/forum.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';
import { NewsforumComponent} from './newsforum/newsforum.component';
import { AdminNewsforumComponent} from './newsforum/admin-newsforum/admin-newsforum.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ParentGuard } from './shared/guard/parent.guard';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ChatComponent } from './chat/chat.component';
import { TeacherattendenceComponent } from './teachers/teacherattendence/teacherattendence.component';
import { ViewTeacherAttendanceComponent } from './teachers/view-teacher-attendance/view-teacher-attendance.component';
import { SalaryCalculationComponent } from './salary-calculation/salary-calculation.component';

export const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'chat',component:ChatComponent, canActivate: [AuthGuard]},
  { path:'verifyEmail',component:VerifyEmailComponent},
  { path:'dashboard',component: DashboardComponent,canActivate: [AuthGuard]},
  { path:'students',component:StudentsComponent,canActivate: [AuthGuard]},
  { path:'teachers',component:TeachersComponent,canActivate: [AuthGuard]},
  { path:'attendance',component:StudentsAttendanceComponent,canActivate: [AuthGuard]},
  { path:'viewAttendance',component: ViewAttendanceComponent,canActivate: [AuthGuard]},
  { path:'viewFees',component:FeesComponent,canActivate: [AuthGuard]},
  { path:'viewPastStudents',component:ViewPastStudentsComponent,canActivate: [AuthGuard]},
  { path:'forum', component:ForumComponent,canActivate: [ParentGuard]},
  { path:'forumAdmin', component:ForumAdminComponent,canActivate: [AuthGuard]},
  { path:'newsforum', component:NewsforumComponent,canActivate: [ParentGuard]},
  { path:'adminNews', component:AdminNewsforumComponent, canActivate: [AuthGuard]},
  { path:'teacherattendance', component:TeacherattendenceComponent, canActivate: [AuthGuard]},
  { path:'viewteacherattendance', component:ViewTeacherAttendanceComponent, canActivate: [AuthGuard]},
  { path:'salaryCalculation', component:SalaryCalculationComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
