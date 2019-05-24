import { TestBed } from '@angular/core/testing';

import { ForumService } from './forum.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDatepickerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('ForumService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[AngularFireModule.initializeApp(environment.firebaseConfig)],
    providers:[AngularFireModule,AngularFirestore,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' }]
  }));

  it('should be created', () => {
    const service: ForumService = TestBed.get(ForumService);
    expect(service).toBeTruthy();
  });
});
