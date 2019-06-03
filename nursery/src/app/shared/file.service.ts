import { Injectable } from '@angular/core';
import { Files } from './files.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FileService {
    formData: Files; 
    constructor(private firestore: AngularFirestore) { }
    
    getPost(userRef){
      return this.firestore.collection('files',ref=>ref.where('pNo','==',userRef)).snapshotChanges();
    }
    
    
    
}
