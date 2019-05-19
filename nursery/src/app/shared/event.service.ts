import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentSnapshot } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Event } from './event';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private event: AngularFirestoreCollection<Event>;
  data$: Observable<Event>;

  constructor(private fire: AngularFirestore) 
  {this.event = this.fire.collection('event'); }

  //  add to db
  eventAdd(data) {
    return this.event.add(data);
   }
  //  get from db
   eventGet() {
     return this.event.snapshotChanges().pipe(
       map(eve => eve.map(e =>{
         const data = e.payload.doc.data() as Event;
         const id = e.payload.doc.id;
         return {id, ...data};
       }))
     );
   }
  //  get from event id
   eventGetId(id) {
     return this.event.doc<Event>(id).get() as Observable<DocumentSnapshot<any>>;
   }
  //  delete from db
  eventDelete(id) {
    this.event.ref.doc(id).delete();
  }
  // update db
  eventUpdate(id, item) {
    this.event.doc(id).update(item); 
  }
}
