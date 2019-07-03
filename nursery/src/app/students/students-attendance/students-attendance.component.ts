import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';
import { Attendance } from './../../shared/attendance.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { MapType } from '@angular/compiler';
import { DISABLED } from '@angular/forms/src/model';


@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.css']
})
export class StudentsAttendanceComponent implements OnInit {
  year1:Student[];
  year2:Student[];
  attendance1:Map<string,string>;
  attendance2:Map<string,string>;
  table1Data:Attendance;
  table2Data:Attendance;
  n1:number;
  n2:number;
  year1size:number;
  year2size:number;
  

 
  constructor(private firestore:AngularFirestore,private service:StudentService,private toastr : ToastrService) { }

  ngOnInit() {
   this.n1=0;
   this.n2=0;
    this.attendance1=new Map();
    this.attendance2=new Map();
    this.table1Data=new Attendance;
    this.table2Data=new Attendance;
    this.service.getYear('1').subscribe(actionArray=>{
      this.year1=actionArray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        } as Student;
      })
    });

    this.service.getYear('2').subscribe(actionArray=>{
      this.year2=actionArray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        } as Student;
      })
    });
  }
  

  onSubmitAttendanceYear1(regNumber:string,val:string){
    
    this.year1size=this.year1.length;

    this.n1++;
    this.attendance1=this.attendance1.set(regNumber,val);
    
    if (this.attendance1.has(regNumber)) {
      this.attendance1.delete(regNumber);
      this.attendance1.set(regNumber,val);
    } else {
      this.attendance1.set(regNumber,val);
    }
  }
  
  onSubmitAttendanceYear2(regNumber:string,val:string){   
    this.year2size=this.year2.length;
    this.n2++;
    this.attendance2=this.attendance2.set(regNumber,val);
    
    if(this.attendance2.has(regNumber)){
      this.attendance2.delete(regNumber);
      this.attendance2.set(regNumber,val);
    }else{
      this.attendance2.set(regNumber,val);
      }
  }

  onSubmit1() {
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    let date = yyyy + '-' + mm + '-' + dd;

    let obj = Array.from(this.attendance1).reduce((obj, [key, value]) => (
      Object.assign(obj, { [key]: value }) 
    ), {});

     this.table1Data.attendance = obj;
     this.table1Data.date=date;
     let data= Object.assign({},this.table1Data);
     this.firestore.collection('attendance').add(data);
     this.toastr.success("Submitted Successfully!!!");
     this.n1++;
  }

  onSubmit2(){
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    let date = yyyy + '-' + mm + '-' + dd;

    let obj = Array.from(this.attendance2).reduce((obj, [key, value]) => (
      Object.assign(obj, { [key]: value }) 
    ), {});

    this.table2Data.attendance = obj;
    this.table2Data.date=date;
    let data= Object.assign({},this.table2Data);
    this.firestore.collection('attendance').add(data);
    this.toastr.success("Submitted Successfully!!!");
    this.n2++;
  }
}
