import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Message } from './messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  formData: Message;
  constructor(
    private firestore:AngularFirestore
  ) { }

  getMessages(){
    return this.firestore.collection('messages',ref=> ref.orderBy('timeSent')).snapshotChanges();
  }
}
