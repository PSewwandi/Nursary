import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../shared/student.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
constructor(private service: StudentService,
  private firestore:AngularFirestore,
  private toastr : ToastrService)
{ }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData={
        id:null,
        fullName:'',
        regNumber:'',
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
      this.firestore.collection('students').add(data);
      this.toastr.success("Submitted Successfully!!!");
    }
    else{
      this.firestore.doc('students/'+form.value.id).update(data);
    this.toastr.success("Updated Successfully!!!");
    }
    this.resetForm(form);
  }

}
