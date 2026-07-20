import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { ProductCard } from "../product-card/product-card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-best-sellers',
  imports: [ProductCard, RouterLink],
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
        .sort(()=>0.4-Math.random())
        .slice(0,4);

      });

  }
}
