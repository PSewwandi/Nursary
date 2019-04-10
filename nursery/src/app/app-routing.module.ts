import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';

export const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'dashboard',component: DashboardComponent},
  { path:'students',component:StudentsComponent},
  { path:'teachers',component:TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
