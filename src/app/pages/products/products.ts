import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../services/product';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  products: any[] = [];
  allProducts: any[] = [];

  selectedCategory = '';

  constructor(
    private productService: Product,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.productService
      .getProducts()
      .subscribe((data: any) => {

        this.allProducts = data;

        this.route.queryParams.subscribe(params => {

          const category = params['category'];

          this.selectedCategory = category || '';

          if (category) {

            this.products = this.allProducts.filter(
              product => product.category === category
            );

          } else {

            this.products = [...this.allProducts];

          }

        });

      });

  }

  filterCategory(category: string) {

    this.router.navigate(
      ['/products'],
      {
        queryParams: {
          category: category
        }
      }
    );

  }

  showAllProducts() {

    this.router.navigate(['/products']);

  }

  sortProducts(event: Event) {

    const value = (event.target as HTMLSelectElement).value;

    switch (value) {

      case 'latest':

        this.products = [...this.products];
        break;

      case 'low-high':

        this.products = [...this.products].sort(
          (a, b) => a.price - b.price
        );
        break;

      case 'high-low':

        this.products = [...this.products].sort(
          (a, b) => b.price - a.price
        );
        break;

      case 'a-z':

        this.products = [...this.products].sort(
          (a, b) => a.title.localeCompare(b.title)
        );
        break;

      case 'z-a':

        this.products = [...this.products].sort(
          (a, b) => b.title.localeCompare(a.title)
        );
        break;

    }

  }

}