import { Component, OnInit ,OnDestroy,AfterViewInit,ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { AngularFireStorage} from '@angular/fire/storage';
import { PostService } from 'src/app/shared/post.service';
//import { FileService } from 'src/app/shared/file.service';
import { Post } from 'src/app/shared/post.model';
//import { Files } from 'src/app/shared/files.model';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
//import { MatTableDataSource } from '@angular/material';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-forum-admin-list',
  templateUrl: './forum-admin-list.component.html',
  styleUrls: ['./forum-admin-list.component.css']
})
export class ForumAdminListComponent implements OnInit,OnDestroy,AfterViewInit {
  list: Post[];//fileList: Files[];
  postno:String="";
  //dataSource: MatTableDataSource<Post>;
  dtTrigger: Subject<string> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  
  constructor(
    private service: PostService,
    //private fservice: FileService,
    private firestore: AngularFirestore,
    //private storage: AngularFireStorage,
    private toastr:ToastrService,
    ) { }

  ngOnInit():void {
    this.service.getPost().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Post;
      })
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();     
      })
    });
  }

  /*viewPost() {
    const data = this.service.postGet();
    data.subscribe(d => {
      this.list = [];
      d.forEach(e => {
        this.list.push(e);
        this.list.sort(function (a, b) {
          return ((new Date(b.date).getTime() - new Date(a.date).getTime()));
        });
      });
      this.dataSource = new MatTableDataSource(this.view);
      this.forumNum = this.view.length;
    });
  }*/

  onEdit(p: Post){
    this.service.formData = Object.assign({},p);
  }

  onDelete(postid: string){
    if(confirm("Are you sure to delete this record")){
      /*this.postno=pNo;
      this.fservice.getPost(this.postno).subscribe(actionArray => {
        this.fileList = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Files;
        }) 
      });
      if (this.fileList!=null) {
        for(var i of this.fileList){
          //this.storage.storage.refFromURL(i.path).delete();
          this.firestore.doc("files/"+i.id).delete();
        }
        
      }
      this.postno="";this.fileList=null;
      */
      this.firestore.doc("post/"+postid).delete();
      this.toastr.warning("Deleted Successfully");
      
      
        /*for (let index = 0; index < this.fileList.length; index++) {
          this.storage.storage.refFromURL(this.fileList[index].path).delete();
          this.firestore.doc("files/"+id).delete(); 
        }
        */
      
    }
  }

  /*deleteFiles(pno:string){
    this.fservice.getPost(pno).subscribe(actionArray => {
      this.fileList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Files;
      })
    });
    
    for(let i of this.fileList){
      this.storage.storage.refFromURL(i.downloadURL).delete();
      this.firestore.doc("files/"+i.pNo).delete();
    }
    
  }
  */


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
