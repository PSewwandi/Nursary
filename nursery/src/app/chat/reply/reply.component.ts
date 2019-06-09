import { Component, OnInit, Inject } from '@angular/core';
import { MessagesService } from 'src/app/shared/messages.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  list: Message[];
  
  constructor(private service:MessagesService,
    private router:Router,
    private firestore:AngularFirestore,
    private toastr:ToastrService,
    ) {
     }

  ngOnInit() {

    this.service.getResponses().subscribe(actionArray=>{
      this.list = actionArray.map(e =>{
        return{
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          email : e.payload.doc.data()['email'],
          message : e.payload.doc.data()['message'],
          timeSent : e.payload.doc.data()['timeSent'],
        };
      })
      console.log(this.list);
    });
  }
  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){

      this.firestore.doc("reply/"+ id).delete();
     this.toastr.warning("Deleted Successfully");
    }
  }

}
