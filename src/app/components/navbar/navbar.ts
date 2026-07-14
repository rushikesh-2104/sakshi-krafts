import { Component } from '@angular/core';
import { Cart } from '../../services/cart';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Wishlist } from '../../services/wishlist';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  cartCount = 0;
  wishlistCount = 0;

  constructor(
    private cartService: Cart, private router: Router,private wishlistService: Wishlist,
  ) {}

  ngOnInit() {

    this.cartService.cartCount.subscribe(count => {

      this.cartCount = count; 

    });

    this.wishlistService.wishlistCount.subscribe(count=>{

    this.wishlistCount = count;

    }); 

  }

  goToWishlist(){

  this.router.navigate([
    '/wishlist'
  ]);

}

  goToCart(){

  this.router.navigate([
    '/cart'
  ]);

}

}