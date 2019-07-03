import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import { TeacherService } from 'src/app/shared/teacher.service';
import { Attendance } from './../../shared/attendance.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { routes } from './../../app-routing.module';
import { StudentService } from 'src/app/shared/student.service';
import { MapType } from '@angular/compiler';
import { forEach } from '@angular/router/src/utils/collection';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-view-teacher-attendance',
  templateUrl: './view-teacher-attendance.component.html',
  styleUrls: ['./view-teacher-attendance.component.css']
})
export class ViewTeacherAttendanceComponent implements OnInit {
  attend:any[];
  listVal:any[];
  listKey:string[];
  attendance:Map<string,string>;
  form:NgForm
  // constructor(private firestore:AngularFirestore, private service: TeacherService, private router: Router) { }
  constructor( private firestore:AngularFirestore, private service: TeacherService, private router: Router) { }

  ngOnInit() {
    this.listVal=[];
    this.listKey=[];
    this.attendance=new Map();
}
viewAttendance( form:NgForm){
  let date = moment(new Date(form.value.date)).format("YYYY-MM-DD");
  
  this.service.getAttendance(date).subscribe(actionArray=>{
    this.attend=actionArray.map(item=>{
      return{
        ...item.payload.doc.get('attendance')
            }
    });
    if(this.attend.length>0){
      for(let i of this.attend){
        for(let v of Object.values(i)){
          this.listVal.push(v);
        }
        for(let k of Object.keys(i) ){
          this.listKey.push(k);
        }
        
      }
      let n=this.listKey.length
      for(var i=0;i<n;i++){
        this.attendance.set(this.listKey[i],this.listVal[i]);
      }
  }else{
    this.attendance=new Map();
  }
});
  
}

}






