import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../shared/student.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Student } from './../../shared/student.model';
import { ToastrService } from 'ngx-toastr';
import { firestore } from 'firebase';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  //define variavles and objects
  list: Student[];
  
  constructor(private service:StudentService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) {
   
     }

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



  onEdit(stdnt: Student){
    this.service.formData = Object.assign({},stdnt);
  }

  onDelete(student:Student){
    if(confirm("Are you sure to delete this record")){
     
      console.log(student);
      this.firestore.collection('pastStudents').add(student);
  
      this.firestore.doc("students/"+student.id).delete();
     this.toastr.warning("Deleted Successfully");
    }
  } 

}
