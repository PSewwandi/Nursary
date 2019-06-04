import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';
import { first, delay } from 'rxjs/operators';
// import { AuthGuard } from '../shared/guard/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  show = true;
  loading = false;
  submitted = false;
  error = '';

  constructor(private auth: AuthenticationService,
    // private guard: AuthGuard,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) { this.router.navigate(['dashboard']); }
    this.loginForm = this.fb.group({
      uName: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required]
    });

    // reset login status
    this.auth.logoutAdmin();
    this.auth.logoutParent();

  }

  get f() { return this.loginForm.controls }

  login() {

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.auth.login(this.f.uName.value, this.f.pwd.value);
    setTimeout(() => { this.loading = false }, 2500);
  }


  getErrorMessage(fControl: FormControl) {
    // return fControl.hasError('required') ? 'This field is required' : '';
    if (fControl.errors.required) {
      return 'This field is required';
    }
  }
  getErrorMessageEmail(fControl: FormControl) {
    // return fControl.hasError('required') ? 'This field is required' : '';
    if (fControl.errors.email) {

      return 'Enter a Valid Email';
    }
  }
}
