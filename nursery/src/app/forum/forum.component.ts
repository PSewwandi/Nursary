import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  list: Post[];

  constructor(private service:PostService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getPost().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Post;
      })
    });
  }

}
