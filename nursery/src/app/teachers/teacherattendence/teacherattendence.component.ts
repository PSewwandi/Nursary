import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import { TeacherService } from 'src/app/shared/teacher.service';
import { Teacher } from 'src/app/shared/teacher.model';
import { Attendance } from './../../shared/attendance.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacherattendence',
  templateUrl: './teacherattendence.component.html',
  styleUrls: ['./teacherattendence.component.css']
})
export class TeacherattendenceComponent implements OnInit {
  year1:Teacher[];
  
  attendance:Map<string,string>;
  tableData:Attendance;
  n:number;
  yearsize:number;
  report;
  constructor(private firestore:AngularFirestore,private service:TeacherService,private toastr : ToastrService) { }

  ngOnInit() {
    
   this.n=0;
    this.attendance=new Map();
    // this.attendance2=new Map();
    this.tableData=new Attendance;
    // this.table2Data=new Attendance;
    this.service.getTeachers().subscribe(actionArray=>{
      this.year1=actionArray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        } as Teacher;
      })
    });

    
  }

  onSubmitAttendance(tNumber:string,val:string) {
    this.yearsize=this.year1.length;
    this.n++;
    this.attendance=this.attendance.set(tNumber,val);
    
    if(this.attendance.has(tNumber)){
      this.attendance.delete(tNumber);
      this.attendance.set(tNumber,val);
    }else{
      this.attendance.set(tNumber,val);
      }
  }

  onSubmit1(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    let date = yyyy + '-' + mm + '-' + dd;

    let obj = Array.from(this.attendance).reduce((obj, [key, value]) => (
      Object.assign(obj, { [key]: value }) 
    ), {});

     this.tableData.attendance = obj;
     this.tableData.year = yyyy;
     this.tableData.month = Number(mm);
     this.tableData.day = Number(dd);

     let data= Object.assign({},this.tableData);
     this.firestore.collection('teacherattendance').add(data);
     this.toastr.success("Submitted Successfully!!!");
     this.n++;
     this.getAttendanceReport(Number(mm));
  }

  getAttendanceReport(month) {
    this.report = Array.from(this.attendance)
      .reduce((obj, v) => Object.assign(obj, { [v[0]]: 0 }), {});
    this.firestore.collection<Attendance>('teacherattendance', ref => ref.where('month', '==', month))
      .valueChanges()
      .subscribe(attendances => {
        console.log('ATTENDANCE', attendances.map(v => v.attendance));
        console.log('report', this.report);

        this.report = attendances.map(v => v.attendance).reduce((sum, o) => {
          Object.keys(o).forEach(k => {
            sum[k] += o[k];
          }); return sum;
        }, this.report);

        console.log(this.report);
      })
  }
}
