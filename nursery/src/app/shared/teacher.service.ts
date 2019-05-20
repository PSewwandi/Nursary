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

 
}