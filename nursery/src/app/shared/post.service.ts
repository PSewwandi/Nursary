import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  formData: Post; 
  constructor(private firestore: AngularFirestore) {
    
   }

  getPost(){
    return this.firestore.collection('post',ref=>ref.orderBy('date','desc')).snapshotChanges();
  }
  // get message from db
  /*postGet(): Observable<Post[]> {
    return this.post.snapshotChanges().pipe(
      map(act => act.map(m => {
        const data = m.payload.doc.data() as Post;
        const id = m.payload.doc.id;
        return {id, ...data };
      }))
    );
  }*/
}
