import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    userData: any; // Save logged in user data

    constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone //
      ) 
    {
      /* Saving user data in localstorage when 
logged in and setting up null when logged out */
  this.afAuth.authState.subscribe(user => {
    if (user) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user'));
    } else {
    localStorage.setItem('user', null);
    JSON.parse(localStorage.getItem('user'));
    }
    })
  }
   // Reset Forggot password
   ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
    window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
    window.alert(error)
    })
    }
  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
    /* Call the SendVerificaitonMail() function when new user sign 
    up and returns promise */
    this.SendVerificationMail();
    this.SetUserData(result.user);
    }).catch((error) => {
    window.alert(error.message)
    })
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
    this.router.navigate(['verifyEmail']);
    })
  }
  
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
    merge: true
    })
  }
  

}
