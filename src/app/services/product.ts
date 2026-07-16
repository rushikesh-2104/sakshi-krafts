import { HttpClient , HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {

  private apiUrl = 'https://sakshi-backend-rho.vercel.app/products';
  private uploadUrl ='https://sakshi-backend-rho.vercel.app/upload/product';

  constructor(private http: HttpClient) {}

  // GET ALL PRODUCTS
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // ADD PRODUCT
  addProducts(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // DELETE PRODUCT
  deleteProducts(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // GET SINGLE PRODUCT
  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // UPDATE PRODUCT
  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  getSingleProduct(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }




  // ==========================
// UPLOAD IMAGE
// ==========================

uploadImage(file: File): Observable<any> {

  const formData = new FormData();

  formData.append('image', file);

  return this.http.post(

    this.uploadUrl,

    formData

  );

}
}