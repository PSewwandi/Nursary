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
    return this.firestore.collection('students').snapshotChanges();
  }
}
