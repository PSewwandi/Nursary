import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentSnapshot } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Forum } from './forum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private forum: AngularFirestoreCollection<Forum>;
  msg$: Observable<Forum>;

  constructor(private fire: AngularFirestore) {
    this.forum = fire.collection('Forums');
   }

   // add massage to db
  forumAdd(msg) {
    return this.forum.add(msg);
  }

// get message from db
  forumGet(): Observable<Forum[]> {
    return this.forum.snapshotChanges().pipe(
      map(act => act.map(m => {
        const data = m.payload.doc.data() as Forum;
        const id = m.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

// get by id
  forumGetId(id) {
    return this.forum.doc<Forum>(id).get() as Observable<DocumentSnapshot<any>>;
  }

// delete from db
  forumDelete(id) {
    this.forum.ref.doc(id).delete();
  }

  // forum update
  forpdate(id, item) {
      this.forum.doc(id).update(item); 
  }
}
