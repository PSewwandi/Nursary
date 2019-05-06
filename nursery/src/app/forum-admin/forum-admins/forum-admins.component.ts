import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Post } from './../../shared/post.model';
import * as moment from 'moment';


@Component({
  selector: 'app-forum-admins',
  templateUrl: './forum-admins.component.html',
  styleUrls: ['./forum-admins.component.css']
})
export class ForumAdminsComponent implements OnInit {
  list: Post[];
  total:string;
  pNumberPart:number;
  totalNumberPart:number;
  isHovering: boolean;
  files: File[] = [];
  selectedFiles: FileList;
  postNo:string;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
}

  detectFilesDrag(event) {
    this.selectedFiles = event;
  }

  constructor(private service:PostService,private firestore:AngularFirestore,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.getPNumber();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData={
      id:null,
      pNo:this.total,
      title:'',
      description:'',
      date:new Date(),
    }
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  onSubmit(form:NgForm){
    let data= Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null){
      data.pNo=this.total;
      this.postNo=data.pNo;
      data.date=moment(new Date(data.date)).format("YYYY-MM-DD");
      this.firestore.collection('post').add(data);
      if(this.selectedFiles!=null){this.onDrop(this.selectedFiles);this.selectedFiles=null;}
      this.toastr.success("Submitted Successfully!!!");
    }
    else{
      this.firestore.doc('post/'+form.value.id).update(data);
      this.toastr.success("Updated Successfully!!!");
    }
    this.resetForm(form);
  }

  getPNumber(){
    this.service.getPost().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
              } as Post;
      })
      this.total="0";
      if(this.list){
        this.totalNumberPart=parseInt(this.total);
        for(let stdnt of this.list){
          this.pNumberPart=parseInt(stdnt.pNo.slice(1));
          if(this.pNumberPart>=this.totalNumberPart){
            this.totalNumberPart=this.pNumberPart;
           }
        }
      }else{
        this.totalNumberPart=0;
      }
      this.totalNumberPart=this.totalNumberPart+1;
      this.total="P00"+this.totalNumberPart;
    });
  }

}
