import { firestore } from 'firebase';
import { Component, OnInit } from '@angular/core';

import { StudentService } from './../../shared/student.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Student } from './../../shared/student.model';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  students:Student[];

  constructor(private service:StudentService,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getStudents().subscribe(actionArray=>{
      this.students=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Student;
      })
    });
  }

}
