import { Component } from '@angular/core';
import { AuthBanner } from "../../components/auth-banner/auth-banner";

@Component({
  selector: 'app-auth',
  imports: [AuthBanner],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
 isLogin = false;

  showLogin() {
    this.isLogin = true;
  }

  showSignup() {
    this.isLogin = false;
  }
}
