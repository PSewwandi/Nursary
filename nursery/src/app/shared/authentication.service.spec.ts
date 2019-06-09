import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignupComponent } from '../signup/signup.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { MatIconModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule, MatMenuModule } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from './auth.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[SignupComponent,VerifyEmailComponent],
    imports:[ FormsModule,RouterModule.forRoot([]),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,MatIconModule,ReactiveFormsModule,MatCardModule,MatDividerModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatProgressSpinnerModule,MatSelectModule,MatDatepickerModule,MatMenuModule],
    providers:[AngularFireModule,AngularFirestore,AngularFireDatabase,AngularFireStorage,MatDatepickerModule,{ provide: APP_BASE_HREF, useValue : '/' },AuthService]
  
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
