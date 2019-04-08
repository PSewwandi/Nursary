import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../shared/student.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Student } from './../../shared/student.model';
import * as moment from 'moment';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  list: Student[];
  total:string;
  regNumberPart:number;
  totalNumberPart:number;
  n:number;
constructor(private service: StudentService,
  private firestore:AngularFirestore,
  private toastr : ToastrService)
{ }

  ngOnInit() {
    this.resetForm();
    this.getRegNumber();
  }
  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData={
        id:null,
        fullName:'',
        regNumber:this.total,
        year:'',
        enteredDay:null,
        phone:'',
        address:'',
        fee:'',
      
      }
  }

  onSubmit(form:NgForm){
    let data= Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null){
      data.regNumber=this.total;
      data.enteredDay=moment(new Date(data.enteredDay)).format("YYYY-MM-DD");
      this.firestore.collection('students').add(data);
      this.toastr.success("Submitted Successfully!!!");
    }
    else{
      this.firestore.doc('students/'+form.value.id).update(data);
    this.toastr.success("Updated Successfully!!!");
    }
    this.resetForm(form);
  }

  getRegNumber(){
    this.service.getStudents().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Student;
      })
      this.total="0";
      if(this.list){
        this.totalNumberPart=parseInt(this.total);
        for(let stdnt of this.list){
          this.regNumberPart=parseInt(stdnt.regNumber.slice(1));
          if(this.regNumberPart>=this.totalNumberPart){
            this.totalNumberPart=this.regNumberPart;
           }
        }
      }
      this.totalNumberPart=this.totalNumberPart+1;
      this.total="S00"+this.totalNumberPart;
    });
  }

}
