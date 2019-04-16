import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../shared/student.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Student } from './../../shared/student.model';
import { firestore } from 'firebase';

@Component({
  selector: 'app-view-past-students',
  templateUrl: './view-past-students.component.html',
  styleUrls: ['./view-past-students.component.css']
})
export class ViewPastStudentsComponent implements OnInit {
  list:Student[];


  constructor(private service:StudentService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getStudents().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Student;
      })
    });
  }

}
