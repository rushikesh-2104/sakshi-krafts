import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Wishlist {

  wishlistItems: any[] = [];

  wishlistCount = new BehaviorSubject<number>(0);

  constructor() {

    const data = localStorage.getItem('wishlist');

    if (data) {

      this.wishlistItems = JSON.parse(data);

      this.updateWishlistCount();

    }

  }

  getWishlist() {

    return this.wishlistItems;

  }

  addToWishlist(product: any) {

    const existing = this.wishlistItems.find(
      item => item._id === product._id
    );

    if (!existing) {

      this.wishlistItems.push(product);

      this.saveWishlist();

    }

  }

  removeFromWishlist(id: string) {

    this.wishlistItems = this.wishlistItems.filter(
      item => item._id !== id
    );

    this.saveWishlist();

  }

  toggleWishlist(product: any) {

    const existing = this.wishlistItems.find(
      item => item._id === product._id
    );

    if (existing) {

      this.removeFromWishlist(product._id);

    } else {

      this.addToWishlist(product);

    }

  }

  isInWishlist(id: string): boolean {

    return this.wishlistItems.some(
      item => item._id === id
    );

  }

  clearWishlist() {

    this.wishlistItems = [];

    localStorage.removeItem('wishlist');

    this.wishlistCount.next(0);

  }

  private saveWishlist() {

    localStorage.setItem(
      'wishlist',
      JSON.stringify(this.wishlistItems)
    );

    this.updateWishlistCount();

  }

  private updateWishlistCount() {

    this.wishlistCount.next(
      this.wishlistItems.length
    );

  }

}