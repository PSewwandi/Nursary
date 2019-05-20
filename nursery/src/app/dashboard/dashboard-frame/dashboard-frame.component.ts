import { Student } from './../../shared/student.model';
import { StudentService } from './../../shared/student.service';
import { Teacher } from './../../shared/teacher.model';
import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/shared/forum';
import { ForumService } from 'src/app/shared/forum.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-dashboard-frame',
  templateUrl: './dashboard-frame.component.html',
  styleUrls: ['./dashboard-frame.component.css']
})
export class DashboardFrameComponent implements OnInit {

  view: Forum[];
  list: Teacher[];
  studentlist: Student[];
  forumList: Forum[];
  paststudentlist: Student[];
  forumNum: number;
  totalTeachers:number;
  totalStudents:number;
  totalForum:number;
  totalPastStudents:number;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fmService: ForumService,
    private tservice: TeacherService,
    private sservice: StudentService,
  ) { }

  ngOnInit() {
    this.getForumNum();
    this.getTNumber();
    this.getSNumber();
    this.getFNumber();
    this.getPStudents();
  }

  getForumNum() {
    const data = this.fmService.forumGet();
    data.subscribe(d => {
      this.view = [];
      d.forEach(e => {
        this.view.push(e);
      });
      this.forumNum = this.view.length;
    });
  }
  logout() {
    this.auth.logoutAdmin();
    this.router.navigate(['']);
  }
  
  getTNumber(){
    this.tservice.getTeachers().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Teacher;
      })
      this.totalTeachers=this.list.length;
    });
  }

  getSNumber(){
    this.sservice.getStudents().subscribe(actionArray=>{
      this.studentlist=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Student;
      })
     this.totalStudents= this.studentlist.length;
    });
  }

  getFNumber(){
    this.fmService.getForum().subscribe(actionArray=>{
      this.forumList=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Forum;
      })
     this.totalForum= this.forumList.length;
    });
  }

  getPStudents(){
    this.sservice.getPastStudents().subscribe(actionArray=>{
      this.paststudentlist=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Student;
      })
     this.totalPastStudents= this.paststudentlist.length;
    });
  }


}
