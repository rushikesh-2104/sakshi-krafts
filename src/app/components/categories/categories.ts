import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../services/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

  categories: any[] = [];

  constructor(
    private router: Router,
    private categoryService: Category
  ) {}

  ngOnInit(): void {

    this.loadCategories();

  }

  loadCategories() {

    this.categoryService
      .getCategories()
      .subscribe({

        next: (data: any) => {

          this.categories = data;

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

  openCategory(category: string) {

    this.router.navigate(
      ['/products'],
      {
        queryParams: {
          category: category
        }
      }
    );

  }

}