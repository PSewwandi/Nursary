import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  admin: boolean;
  parent: boolean;

  constructor() { }
  loginAdmin(item) {
    this.admin = item;
  }

  loginParent(item) {
      this.parent = item;
  }

  logoutAdmin() {
      this.admin = false;
  }

  logoutParent() {
      this.parent = false;
  }
}
