import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Attendance } from './attendance.model';
import { and } from '@angular/router/src/utils/collection';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
    formData: Student;
    formDate: string;
  constructor(private firestore:AngularFirestore) { }

  getStudents(){
    return this.firestore.collection('students',ref=> ref.orderBy('regNumber')).snapshotChanges();
  }

  // searchStudents(stdreg){
  //   return this.firestore.collection('students',ref => ref.where('regNumber', '>=', stdreg)).snapshotChanges();
    
  // }

  getYear(year){
    return this.firestore.collection('students',ref=>ref.where('year','==',year)).snapshotChanges();
  }

  getAttendance(date){
    return this.firestore.collection('attendance',ref=>ref.where('date','==',date)).snapshotChanges();
  }

  getStudent(id){
    return this.firestore.collection('students',ref=>ref.where('id','==',id)).snapshotChanges();
  }
  


}
