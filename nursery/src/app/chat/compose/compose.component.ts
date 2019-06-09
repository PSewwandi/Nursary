import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  itemName = '';
  itemEmail = '';
  itemMessage = '';
  timeSent = Date;
  items: Observable<any[]>;
  contactForm: FormGroup;
  
  constructor(
    private router: Router,
    private db:AngularFirestore,
    private fb: FormBuilder) {
      this.items = db.collection('reply').valueChanges()
      this.contactForm = fb.group({
        contactFormName: ['', Validators.required],
        contactFormEmail: ['', [Validators.required, Validators.email]],
        contactFormMessage: ['', Validators.required]
     });
   }

  ngOnInit() {
  }

  onSubmit()  {
    const timeStamp = this.getTimeStamp();
    this.db.collection('/reply').add({ name: this.itemName, email: this.itemEmail, 
      message: this.itemMessage,timeSent:timeStamp});
//Popup message
    alert('Thank you for contacting us, your message has gone through!')
   }

    // Clearing the form after submit
  clearForm() {
    this.contactForm.reset();
  }
  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                  (now.getUTCMonth() + 1) + '/' +
                  now.getUTCDate();
    const time = now.getHours() + ':' +
                  now.getMinutes() 
    return (date + ' ' +time);
  }

  close(){
    this.router.navigate(['chat']);
  }
}
