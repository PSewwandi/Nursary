import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage(fControl: FormControl) {
    // return fControl.hasError('required') ? 'This field is required' : '';
    if (fControl.invalid) {
      return 'This field is required';
    }
  }
  Login() {
    this.router.navigate(['login']);
  }

  Cancel(){
    this.router.navigate(['']);
  }
}
