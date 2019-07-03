import { Teacher } from './teacher.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class TeacherService {
    formData: Teacher;
  constructor(private firestore:AngularFirestore) { }

  getTeachers(){
    return this.firestore.collection('teachers',ref=> ref.orderBy('tNumber')).snapshotChanges();
  }
  getAttendance(date){
    return this.firestore.collection('teacherattendance',ref=>ref.where('day','==',date)).snapshotChanges();
  }

  getTeacher(id){
    return this.firestore.collection('teachers',ref=>ref.where('tNumber','==',id)).snapshotChanges();
  }

 
}