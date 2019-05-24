import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private router:Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  Login() {
    this.router.navigate(['login']);
  }

}
