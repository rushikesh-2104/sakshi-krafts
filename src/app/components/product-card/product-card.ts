import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Wishlist } from '../../services/wishlist';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() product: any;

  constructor(
    private router: Router,
    public wishlistService: Wishlist
  ) {}

  viewProduct(id: string) {

    this.router.navigate([
      '/products',
      id
    ]);

  }

  toggleWishlist(event: Event) {

    event.stopPropagation();

    this.wishlistService.toggleWishlist(this.product);

  }

  isWishlisted(): boolean {

    return this.wishlistService.isInWishlist(
      this.product._id
    );

  }

}