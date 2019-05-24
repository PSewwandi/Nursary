import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDatepickerModule, MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[SignupComponent,VerifyEmailComponent],
    imports:[ FormsModule,RouterModule.forRoot([]),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule],
    providers:[AngularFireModule,AngularFirestore,AngularFireDatabase,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' },AuthService]
  
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
