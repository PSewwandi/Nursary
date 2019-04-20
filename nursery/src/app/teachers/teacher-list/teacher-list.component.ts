import { Component, OnInit } from '@angular/core';
import { TeacherService } from './../../shared/teacher.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Teacher } from './../../shared/teacher.model';
import { ToastrService } from 'ngx-toastr';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  //const size$ = new Subject<string>();

  list: Teacher[];
 

  constructor(private service:TeacherService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    // this.filterTeachers();
    
    this.service.getTeachers().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Teacher;
      })
    });
  }
  onEdit(teacher: Teacher){
    this.service.formData = Object.assign({},teacher);
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
        this.firestore.doc("teachers/"+id).delete();
        this.toastr.warning("Deleted Successfully");
    }
  }

//  filterteachers(){
// const queryObservable = this.size$.pipe(
//   switchMap(size => 
//     afs.collection('items', ref => ref.where('size', '==', size)).valueChanges()
//   )
// );

// // subscribe to changes
// queryObservable.subscribe(queriedItems => {
//   console.log(queriedItems);  
// });
//  }
}


