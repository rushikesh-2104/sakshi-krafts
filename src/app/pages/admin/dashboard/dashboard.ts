import { Component, OnInit } from '@angular/core';
import { Product } from '../../../services/product';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../../services/category';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  totalProducts = 0;
  totalCategories = 0;

  recentProducts: any[] = [];

  constructor(private productService: Product, private cate:Category , private authService:Auth , private router:Router) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data: any) => {

      this.totalProducts = data.length;

      this.recentProducts = data.slice(0, 5);

    });

    this.cate.getCategories().subscribe((data:any)=>{
      this.totalCategories = data.length;
    })

  }

  logout(){

this.authService.logout();

this.router.navigate(['/auth']);

}

}