import { routes } from './../../app-routing.module';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import { StudentService } from 'src/app/shared/student.service';
import { Attendance } from './../../shared/attendance.model';
import { NgForm } from '@angular/forms';
import { MapType } from '@angular/compiler';
import * as moment from 'moment';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  attend:any[];
  listVal:any[];
  listKey:string[];
  attendance:Map<string,string>;
  form:NgForm

  constructor( private firestore:AngularFirestore, private service: StudentService) { }

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

   
    for(let i of this.attend){
      //console.log(i);
      
      for(let v of Object.values(i)){
        this.listVal.push(v);
      }
      for(let k of Object.keys(i) ){
        this.listKey.push(k);
      }
    }
    // console.log(this.listKey);
    // console.log(this.listVal);
    let n=this.listKey.length
    for(var i=0;i<n;i++){
      this.attendance.set(this.listKey[i],this.listVal[i]);
    }
});

}



}
