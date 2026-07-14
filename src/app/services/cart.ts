import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  cartItems: any[] = [];

  cartCount = new BehaviorSubject<number>(0);

  constructor() {

    const data = localStorage.getItem('cart');

    if (data) {

      this.cartItems = JSON.parse(data);

      this.updateCartCount();

    }

  }

  getCart() {

    return this.cartItems;

  }

  addToCart(product: any, quantity: number) {

    const existing = this.cartItems.find(
      item => item._id === product._id
    );

    if (existing) {

      existing.quantity += quantity;

    } else {

      this.cartItems.push({
        ...product,
        quantity
      });

    }

    this.saveCart();

  }

  removeFromCart(id: string) {

    this.cartItems = this.cartItems.filter(
      item => item._id !== id
    );

    this.saveCart();

  }

  increaseQuantity(id: string) {

    const item = this.cartItems.find(
      p => p._id === id
    );

    if (item) {

      item.quantity++;

      this.saveCart();

    }

  }

  decreaseQuantity(id: string) {

    const item = this.cartItems.find(
      p => p._id === id
    );

    if (item && item.quantity > 1) {

      item.quantity--;

      this.saveCart();

    }

  }

  private saveCart() {

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

    this.updateCartCount();

  }

  private updateCartCount() {

    const totalQuantity = this.cartItems.reduce(

      (total, item) => total + item.quantity,

      0

    );

    this.cartCount.next(totalQuantity);

  }

}