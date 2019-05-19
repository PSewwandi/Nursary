import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Adding variables
  itemName = '';
  itemEmail = '';
  itemMessage = '';
  items: Observable<any[]>;
  contactForm: FormGroup;
  
  constructor(
    private router: Router,
    private db:AngularFirestore,
    private fb: FormBuilder) {
      this.items = db.collection('messages').valueChanges()
      this.contactForm = fb.group({
        contactFormName: ['', Validators.required],
        contactFormEmail: ['', [Validators.required, Validators.email]],
        contactFormMessage: ['', Validators.required]
     });
   }

  ngOnInit() {
  }

  onSubmit()  {
    this.db.collection('/messages').add({ name: this.itemName, email: this.itemEmail, 
      message: this.itemMessage});
//Popup message
    alert('Thank you for contacting us, your message has gone through!')
   }

    // Clearing the form after submit
  clearForm() {
    this.contactForm.reset();
  }
  Login() {
    this.router.navigate(['login']);
  }

}
