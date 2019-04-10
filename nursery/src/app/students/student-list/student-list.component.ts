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
  list: Student[];
  //name: Student[];
  

  constructor(private service:StudentService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) {
   
     }

  ngOnInit() {
    // let d=this.firestore.collection('students',ref => ref.where('year', '==','1')).snapshotChanges()
    // d.subscribe(res=>{
    //   this.name=res.map(item=>{
    //     return{
    //       id:item.payload.doc.id,
    //       ...item.payload.doc.data()
    //           } as Student;
    //  })
    //  for(let i of this.name)
    //  console.log(i.fullName,i.address,i.enteredDay);
    // });


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

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
        this.firestore.doc("students/"+id).delete();
        this.toastr.warning("Deleted Successfully");
    }
  } 

}
