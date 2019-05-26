import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/messages';
import { MessagesService } from '../shared/messages.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  list: Message[];
  
  constructor(private service:MessagesService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) {
   
     }

  ngOnInit() {

    this.service.getMessages().subscribe(actionArray=>{
      
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          email : e.payload.doc.data()['email'],
          message : e.payload.doc.data()['message'],
        };
      })
      console.log(this.list);
    });
  }
  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){

      this.firestore.doc("messages/"+ id).delete();
     this.toastr.warning("Deleted Successfully");
    }
  } 

}
