import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  admin: boolean;
  parent: boolean;
  eve = environment;
  // userData: any;
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
  ) {
    // Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  logoutAdmin() {
    this.afAuth.auth.signOut();
  }

  logoutParent() {
    this.afAuth.auth.signOut();
  }

  async  login(email, password) {
    if (email == this.eve.adminConfig.uName) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        (credential) => {
          this.updateUserData(credential.user);
          console.log(credential.user.email);
        }
      ).then(() => this.router.navigate(['dashboard']))
        .catch(function (error) {
          // console.log(error);
          alert("Please try again..");
        });
    } else {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        (credential) => {
          this.updateUserData(credential.user);
          console.log(credential.user.email);
        }
      ).then(() => this.router.navigate(['newsforum']))
        .catch(function (error) {
          // console.log(this.eve);
          alert("Please try again..");
        });
    }

  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    console.log(user);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };

    return userRef.set(data, { merge: true });
  }

  public isAuthenticated(): Boolean {
    if (this.user$) { return true; }
    return false;
  }
}
