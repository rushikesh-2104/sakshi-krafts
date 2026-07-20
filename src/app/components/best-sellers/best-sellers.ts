import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { ProductCard } from "../product-card/product-card";

@Component({
  selector: 'app-best-sellers',
  imports: [ProductCard],
  templateUrl: './best-sellers.html',
  styleUrl: './best-sellers.css',
})
export class BestSellers implements OnInit {
products:any[] = [];

  constructor(
    private productService:Product
  ){}

  ngOnInit(): void {

    this.productService
      .getProducts()
      .subscribe((data:any)=>{

        this.products = data
        .sort(()=>0.5-Math.random())
        .slice(0,5);

      });

  }
}
