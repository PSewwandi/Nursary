import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableDirective } from 'angular-datatables';
import { AngularFirestore } from '@angular/fire/firestore';
import { ForumAdminListComponent } from './forum-admin-list.component';
//import { BehaviorSubject } from 'rxjs';
import { AngularFireStorage} from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/shared/post.service';


fdescribe('ForumAdminListComponent', () => {
  let component: ForumAdminListComponent;
  let fixture: ComponentFixture<ForumAdminListComponent>;
  
  /*const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };*/
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumAdminListComponent,DataTableDirective ],
      //providers:[{provide:AngularFirestore,useValue: FirestoreStub},{provide:AngularFireStorage,useValue:FirestoreStub},{provide:ToastrService,useValue:FirestoreStub},{provide:PostService,useValue:sortServiceSpy} ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
