import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../services/category';

@Component({
  selector: 'app-categories',
  imports: [FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories implements OnInit {

  constructor(private categoryService: Category) {}

  // ==========================
  // DATA
  // ==========================

  categories: any[] = [];

  filtered: any[] = [];

  totalCategories = 0;

  // ==========================
  // SEARCH
  // ==========================

  searchText = '';

  // ==========================
  // UI
  // ==========================

  loading = true;

  showAddModal = false;

  saving = false;

  editing = false;

  selectedCategoryId = '';

  // ==========================
  // FORM
  // ==========================

  newCategory = {

    name: '',

    image: ''

  };

  // ==========================
  // INIT
  // ==========================

  ngOnInit(): void {

    this.loadCategories();

  }

  // ==========================
  // LOAD CATEGORIES
  // ==========================

  loadCategories() {

    this.loading = true;

    this.categoryService
      .getCategories()
      .subscribe({

        next: (data: any) => {

          this.categories = data;

          this.filtered = [...data];

          this.totalCategories = data.length;

          this.loading = false;

        },

        error: (err) => {

          console.log(err);

          this.loading = false;

        }

      });

  }

  // ==========================
  // SEARCH
  // ==========================

  searchCategory() {

    this.filtered = this.categories.filter(category =>

      category.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase())

    );

  }

  // ==========================
  // OPEN ADD MODAL
  // ==========================

  addCategory() {

    this.editing = false;

    this.newCategory = {

      name: '',

      image: ''

    };

    this.showAddModal = true;

  }

  // ==========================
  // CLOSE MODAL
  // ==========================

  closeModal() {

    this.showAddModal = false;

    this.editing = false;

    this.selectedCategoryId = '';

    this.newCategory = {

      name: '',

      image: ''

    };

  }

  // ==========================
  // SAVE / UPDATE CATEGORY
  // ==========================

  saveCategory() {

    if (!this.newCategory.name.trim()) {

      alert('Category Name is required');

      return;

    }

    this.saving = true;

    if (this.editing) {

      this.categoryService

        .updateCategory(

          this.selectedCategoryId,

          this.newCategory

        )

        .subscribe({

          next: () => {

            this.loadCategories();

            this.closeModal();

            this.saving = false;

          },

          error: (err) => {

            console.log(err);

            this.saving = false;

          }

        });

    }

    else {

      this.categoryService

        .addCategory(this.newCategory)

        .subscribe({

          next: () => {

            this.loadCategories();

            this.closeModal();

            this.saving = false;

          },

          error: (err) => {

            console.log(err);

            this.saving = false;

          }

        });

    }

  }

  // ==========================
  // EDIT CATEGORY
  // ==========================

  editCategory(category: any) {

    this.editing = true;

    this.showAddModal = true;

    this.selectedCategoryId = category._id;

    this.newCategory = {

      name: category.name,

      image: category.image

    };

  }

  // ==========================
  // DELETE CATEGORY
  // ==========================

  deleteCategory(category: any) {

    const confirmDelete = confirm(

      'Delete this category?'

    );

    if (!confirmDelete) return;

    this.categoryService

      .deleteCategory(category._id)

      .subscribe({

        next: () => {

          this.loadCategories();

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

}