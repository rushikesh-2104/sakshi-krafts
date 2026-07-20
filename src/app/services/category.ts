import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';


@Injectable({
  providedIn: 'root'
})
export class Category {

  private apiUrl =
    'https://sakshi-backend-rho.vercel.app/categories';

  constructor(private http: HttpClient , private auth:Auth) {}


  private getHeaders() {

  return {

    headers: new HttpHeaders({

      Authorization: `Bearer ${this.auth.getToken()}`

    })

  };

}

  // ==========================
  // GET ALL CATEGORIES
  // ==========================

  getCategories(): Observable<any> {

    return this.http.get(this.apiUrl);

  }

  // ==========================
  // ADD CATEGORY
  // ==========================

  addCategory(category: any): Observable<any> {

    return this.http.post(
      this.apiUrl,
      category,
      this.getHeaders()
    );

  }

  // ==========================
  // DELETE CATEGORY
  // ==========================

  deleteCategory(id: string): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`,
      this.getHeaders()
    );

  }

  // ==========================
  // GET SINGLE CATEGORY
  // ==========================

  getCategoryById(id: string): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/${id}`
    );

  }

  // ==========================
  // UPDATE CATEGORY
  // ==========================

  updateCategory(id: string, category: any): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}`,
      category,
      this.getHeaders()
    );

  }

}