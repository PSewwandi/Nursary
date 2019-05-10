import { Component, OnInit,Input } from '@angular/core';
import { Files } from '../../shared/files.model';
import { FileService } from '../../shared/file.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() postno: string;
  list:Files[];
  
  constructor(private service:FileService, private db: AngularFirestore) { }

  ngOnInit() {
    this.service.getPost(this.postno).subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Files;
      })
    });
  }

  

}
