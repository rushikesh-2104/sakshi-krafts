import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartPage implements OnInit {

  cartItems: any[] = [];

  grandTotal = 0;

  constructor(
    private cartService: Cart
  ) {}

  ngOnInit(): void {

    this.loadCart();

  }

  loadCart() {

    this.cartItems = this.cartService.getCart();

    this.calculateTotal();

  }

  calculateTotal() {

    this.grandTotal = 0;

    this.cartItems.forEach(item => {

      this.grandTotal += item.price * item.quantity;

    });

  }

  increaseQuantity(item: any) {

    item.quantity++;

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

    this.calculateTotal();

  }

  decreaseQuantity(item: any) {

    if (item.quantity > 1) {

      item.quantity--;

      localStorage.setItem(
        'cart',
        JSON.stringify(this.cartItems)
      );

      this.calculateTotal();

    }

  }

  removeItem(id: string) {

    this.cartService.removeFromCart(id);

    this.loadCart();

  }

  orderOnWhatsapp() {

    let message = `Hello Sakshi Krafts 👋%0A%0AI want to order:%0A%0A`;

    this.cartItems.forEach(item => {

      message += `• ${item.title}%0A`;
      message += `Qty : ${item.quantity}%0A`;
      message += `Price : ₹${item.price}%0A%0A`;

    });

    message += `Grand Total : ₹${this.grandTotal}`;

    window.open(
      `https://wa.me/917208553533?text=${message}`,
      '_blank'
    );

  }

}