import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';


export const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'', component:HomeComponent},
  { path:'dashboard',component: DashboardComponent},
  { path:'students',component:StudentsComponent},
  { path:'forum', component: ForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
