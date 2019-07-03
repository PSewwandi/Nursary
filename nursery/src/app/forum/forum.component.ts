import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Post } from '../shared/post.model';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  list: Post[];

  constructor(private service:PostService,
    private firestore:AngularFirestore,private auth: AuthenticationService,public router: Router) { }

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
  logout() {
    this.auth.logoutParent();
    this.router.navigate(['']);
  }


}
