import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Category {

  private apiUrl =
    'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

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
      category
    );

  }

  // ==========================
  // DELETE CATEGORY
  // ==========================

  deleteCategory(id: string): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${id}`
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
      category
    );

  }

}