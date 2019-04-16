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

export const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'dashboard',component: DashboardComponent},
  { path:'students',component:StudentsComponent},
  { path:'teachers',component:TeachersComponent},
  { path:'attendance',component:StudentsAttendanceComponent},
  { path:'viewAttendance',component: ViewAttendanceComponent},
  { path:'viewFees',component:FeesComponent},
  { path:'viewPastStudents',component:ViewPastStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
