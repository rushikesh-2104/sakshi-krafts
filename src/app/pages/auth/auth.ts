import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AAuth {

  constructor(

    private authService: Auth,

    private router: Router

  ) {}

  // ==========================
  // FORM
  // ==========================

  email = '';

  password = '';

  rememberMe = false;

  // ==========================
  // UI
  // ==========================

  hidePassword = true;

  loading = false;

  errorMessage = '';

  // ==========================
  // SHOW / HIDE PASSWORD
  // ==========================

  togglePassword() {

    this.hidePassword = !this.hidePassword;

  }

  // ==========================
  // LOGIN
  // ==========================

  login() {

    if (!this.email.trim()) {

      this.errorMessage = 'Please enter email';

      return;

    }

    if (!this.password.trim()) {

      this.errorMessage = 'Please enter password';

      return;

    }

    this.loading = true;

    this.errorMessage = '';

    this.authService.login({

      email: this.email,

      password: this.password

    }).subscribe({

      next: (res: any) => {

        // Save JWT Token
        this.authService.saveToken(res.token);

        this.loading = false;

        // Redirect to Dashboard
        this.router.navigate(['/admin']);

      },

      error: (err) => {

        this.loading = false;

        this.errorMessage = err.error.message;

      }

    });

  }

}