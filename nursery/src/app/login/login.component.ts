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
  adminUrl: string;
  parentUrl: string;
  error = '';

  constructor(private auth: AuthenticationService,
    // private guard: AuthGuard,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      uName: ['', Validators.required],
      pwd: ['', Validators.required]
    });

    // reset login status
    this.auth.logoutAdmin();
    this.auth.logoutParent();

    // get return url from route parameters or default to '/'
    this.adminUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    this.parentUrl = this.route.snapshot.queryParams['returnUrl'] || 'forum';
  }

  get f() { return this.loginForm.controls }

  login() {

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.f.uName.value == "thusitha" && this.f.pwd.value == "admin") {
      this.auth.loginAdmin(true);
      setTimeout(() => {
        this.router.navigate([this.adminUrl]);
      }, 500);
      
    } else if (this.f.uName.value == "thusitha" && this.f.pwd.value == "parent") {
      this.auth.loginParent(true);
      setTimeout(() => {
        this.router.navigate([this.parentUrl]);
      }, 500);
    } else {
      this.loading = false;
    }
  }


  getErrorMessage(fControl: FormControl) {
    // return fControl.hasError('required') ? 'This field is required' : '';
    if (fControl.invalid) {
      return 'This field is required';
    }
  }
}
