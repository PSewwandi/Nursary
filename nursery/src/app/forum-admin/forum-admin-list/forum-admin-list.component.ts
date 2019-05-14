import { Component, OnInit ,OnDestroy,AfterViewInit,ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostService } from 'src/app/shared/post.service';
import { Post } from 'src/app/shared/post.model';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-forum-admin-list',
  templateUrl: './forum-admin-list.component.html',
  styleUrls: ['./forum-admin-list.component.css']
})
export class ForumAdminListComponent implements OnInit,OnDestroy,AfterViewInit {
  list: Post[];
  dtTrigger: Subject<string> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  constructor(private service: PostService,private firestore: AngularFirestore,private toastr:ToastrService) { }

  ngOnInit():void {
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

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
       dtInstance.destroy();
       this.dtTrigger.next();     
   });}
}
