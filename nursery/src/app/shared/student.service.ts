import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Student } from './student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
    formData: Student;
  constructor(private firestore:AngularFirestore) { }

  getStudents(){
    return this.firestore.collection('students',ref=> ref.orderBy('regNumber')).snapshotChanges();
  }

  // searchStudents(stdreg){
  //   return this.firestore.collection('students',ref => ref.where('regNumber', '>=', stdreg)).snapshotChanges();
    
  // }
}
