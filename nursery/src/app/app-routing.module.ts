import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ForumComponent } from './forum/forum.component';

=======
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsAttendanceComponent } from './students/students-attendance/students-attendance.component';
import { ViewAttendanceComponent } from './students/view-attendance/view-attendance.component';
import { FeesComponent } from './students/fees/fees.component';
import { ViewPastStudentsComponent } from './students/view-past-students/view-past-students.component';
>>>>>>> a71946d8b04cc27dc11d0a9a0b37b3810a9f2cbe
=======
>>>>>>> parent of 1addcf6... first
=======
>>>>>>> parent of 1addcf6... first

export const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'', component:HomeComponent},
  { path:'dashboard',component: DashboardComponent},
  { path:'students',component:StudentsComponent},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { path:'forum', component: ForumComponent}
=======
  { path:'teachers',component:TeachersComponent},
  { path:'attendance',component:StudentsAttendanceComponent},
  { path:'viewAttendance',component: ViewAttendanceComponent},
  { path:'viewFees',component:FeesComponent},
  { path:'viewPastStudents',component:ViewPastStudentsComponent}
>>>>>>> a71946d8b04cc27dc11d0a9a0b37b3810a9f2cbe
=======
>>>>>>> parent of 1addcf6... first
=======
>>>>>>> parent of 1addcf6... first
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
