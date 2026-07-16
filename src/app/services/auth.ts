import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://sakshi-backend-rho.vercel.app/login';

  constructor(private http: HttpClient) {}

  // ==========================
  // LOGIN
  // ==========================

  login(data: any): Observable<any> {

    return this.http.post(this.apiUrl, data);

  }

  // ==========================
  // SAVE TOKEN
  // ==========================

  saveToken(token: string) {

    localStorage.setItem('token', token);

  }

  // ==========================
  // GET TOKEN
  // ==========================

  getToken() {

    return localStorage.getItem('token');

  }

  // ==========================
  // LOGIN STATUS
  // ==========================

  isLoggedIn() {

    return !!localStorage.getItem('token');

  }

  // ==========================
  // LOGOUT
  // ==========================

  logout() {

    localStorage.removeItem('token');

  }

}