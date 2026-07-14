import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Wishlist } from '../../services/wishlist';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class WishlistPage implements OnInit {

  wishlistItems: any[] = [];

  grandTotal = 0;

  constructor(
    private wishlistService: Wishlist,
    private cartService: Cart,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadWishlist();

  }

  loadWishlist() {

    this.wishlistItems = this.wishlistService.getWishlist();

    this.calculateTotal();

  }

  calculateTotal() {

    this.grandTotal = this.wishlistItems.reduce(

      (total, item) => total + item.price,

      0

    );

  }

  removeItem(id: string) {

    this.wishlistService.removeFromWishlist(id);

    this.loadWishlist();

  }

  moveToCart(item: any) {

    this.cartService.addToCart(item, 1);

    this.wishlistService.removeFromWishlist(item._id);

    this.loadWishlist();

  }

  continueShopping() {

    this.router.navigate([
      '/products'
    ]);

  }

}