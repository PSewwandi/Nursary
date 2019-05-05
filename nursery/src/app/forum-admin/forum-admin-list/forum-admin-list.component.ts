import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostService } from 'src/app/shared/post.service';
import { Post } from 'src/app/shared/post.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forum-admin-list',
  templateUrl: './forum-admin-list.component.html',
  styleUrls: ['./forum-admin-list.component.css']
})
export class ForumAdminListComponent implements OnInit {
  list: Post[];
  constructor(private service: PostService,private firestore: AngularFirestore,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getPost().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Post;
      })
    });
  }
  onEdit(p: Post){
    this.service.formData = Object.assign({},p);
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
        this.firestore.doc("post/"+id).delete();
        this.toastr.warning("Deleted Successfully");
    }
  }

}
