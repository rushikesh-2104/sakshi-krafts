import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  imports: [ProductCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  product: any;
  relatedProducts: any[] = [];

  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: Product,
    private cartService: Cart
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.productService
        .getSingleProduct(id)
        .subscribe((data: any) => {

          this.product = data;

        });

      this.productService
        .getProducts()
        .subscribe((data: any) => {

          this.relatedProducts = data
            .filter((p: any) => p._id !== id)
            .slice(0, 4);

        });

    }

  }

  increaseQuantity() {

    this.quantity++;

  }

  decreaseQuantity() {

    if (this.quantity > 1) {

      this.quantity--;

    }

  }

  addToCart() {

    this.cartService.addToCart(
      this.product,
      this.quantity
    );

    alert('Product added to cart.');

  }
orderOnWhatsapp() {

  const phone = '9326562042'; // Sakshi ka WhatsApp Number

  const message = `
Hi Sakshi Krafts 👋

I would like to order:

🌸 Product : ${this.product.title}

💰 Price : ₹${this.product.price}

📦 Quantity : ${this.quantity}

💵 Total : ₹${this.product.price * this.quantity}

Please share payment details.

Thank You ❤️
`;

  window.open(

    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

    '_blank'

  );

}
}