import { Component, OnInit } from '@angular/core';
import { TeacherService } from './../../shared/teacher.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Teacher } from './../../shared/teacher.model';
import * as moment from 'moment';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  list: Teacher[];
  total:string;
  tNumberPart:number;
  totalNumberPart:number;


  constructor(private service: TeacherService,
    private firestore:AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
    
    this.resetForm();
    this.getTNumber();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
      this.service.formData={
        id:null,
        fullName:'',
        tNumber:this.total,
        enteredDay:null,
        phone:'',
        address:'',
        age:'',
      
      }
  }

  onSubmit(form:NgForm){
    let data= Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null){
      data.tNumber=this.total;
      data.enteredDay=moment(new Date(data.enteredDay)).format("YYYY-MM-DD");
      this.firestore.collection('teachers').add(data);
      this.toastr.success("Submitted Successfully!!!");
    }
    else{
      this.firestore.doc('teachers/'+form.value.id).update(data);
      this.toastr.success("Updated Successfully!!!");
    }
    this.resetForm(form);
  }

  getTNumber(){
    this.service.getTeachers().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Teacher;
      })
      this.total="0";
      if(this.list){
        this.totalNumberPart=parseInt(this.total);
        for(let stdnt of this.list){
          this.tNumberPart=parseInt(stdnt.tNumber.slice(1));
          if(this.tNumberPart>=this.totalNumberPart){
            this.totalNumberPart=this.tNumberPart;
           }
        }
      }else{
        this.totalNumberPart=0;
      }
      this.totalNumberPart=this.totalNumberPart+1;
      this.total="T00"+this.totalNumberPart;
    });
  }


}


