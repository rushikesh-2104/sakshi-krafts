import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../services/product';
import { Category } from '../../../services/category';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class AProducts implements OnInit {

  // ==========================
  // DATA
  // ==========================

  products: any[] = [];

  filtered: any[] = [];

  totalProducts = 0;

  // ==========================
  // SEARCH
  // ==========================

  searchText = '';

  // ==========================
  // FILTER
  // ==========================

  selectedCategory = 'All Categories';

  // ==========================
  // SORT
  // ==========================

  selectedSort = '';

  // ==========================
  // UI
  // ==========================

  loading = true;

  categories: any[] = [];

  constructor(
    private productService: Product , private categoryService:Category
  ) {}

  ngOnInit(): void {

    this.loadProducts();
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


  // =====================================
  // GET PRODUCTS
  // =====================================

  loadProducts() {

    this.loading = true;

    this.productService.getProducts().subscribe({

      next: (data: any) => {

        this.products = data;

        this.filtered = [...data];

        this.totalProducts = data.length;

        this.loading = false;

        this.products = data;

this.filtered = [...data];

this.totalProducts = data.length;

// Pagination
this.totalPages = Math.ceil(
  this.filtered.length / this.itemsPerPage
);

this.updatePagination();

this.loading = false;

      },

      error: (err) => {

        console.log(err);

        this.loading = false;

      }

    });

  }

  // =====================================
  // SEARCH
  // =====================================

  searchProducts() {

    this.filtered = this.products.filter(product =>

      product.title
        .toLowerCase()
        .includes(this.searchText.toLowerCase())

    );

  }

  // =====================================
  // CATEGORY FILTER
  // =====================================

  filterCategory() {

    if (this.selectedCategory === 'All Categories') {

      this.filtered = [...this.products];

      return;

    }

    this.filtered = this.products.filter(product =>

      product.category === this.selectedCategory

    );

  }

  // =====================================
  // SORT
  // =====================================

  sort(event: any) {

    const value = event.target.value;

    switch (value) {

      case 'low':

        this.lowToHigh();

        break;

      case 'high':

        this.highToLow();

        break;

      case 'az':

        this.aToZ();

        break;

      case 'za':

        this.zToA();

        break;

    }

  }

  // =====================================
  // PRICE LOW TO HIGH
  // =====================================

  lowToHigh() {

    this.filtered.sort((a, b) =>

      a.price - b.price

    );

  }

  // =====================================
  // PRICE HIGH TO LOW
  // =====================================

  highToLow() {

    this.filtered.sort((a, b) =>

      b.price - a.price

    );

  }

  // =====================================
  // A-Z
  // =====================================

  aToZ() {

    this.filtered.sort((a, b) =>

      a.title.localeCompare(b.title)

    );

  }

  // =====================================
  // Z-A
  // =====================================

  zToA() {

    this.filtered.sort((a, b) =>

      b.title.localeCompare(a.title)

    );

  }

 // =====================================
// UI
// =====================================

uploading = false;

selectedFile!: File;

previewUrl = '';

showModal = false;

saving = false;

editing = false;

selectedProductId = '';

// =====================================
// FORM
// =====================================

newProduct = {

  title: '',

  description: '',

  price: 0,

  category: '',

  url: ''

};

// =====================================
// DELETE
// =====================================

deleteProduct(id: string) {

  const confirmDelete = confirm(

    'Delete this product?'

  );

  if (!confirmDelete) return;

  this.productService
    .deleteProducts(id)
    .subscribe({

      next: () => {

        this.loadProducts();

      },

      error: (err) => {

        console.log(err);

      }

    });

}

// =====================================
// OPEN ADD PRODUCT
// =====================================

addProduct() {

  this.editing = false;

  this.selectedProductId = '';

  this.newProduct = {

    title: '',

    description: '',

    price: 0,

    category: '',

    url: ''

  };

  this.showModal = true;

}

// =====================================
// EDIT PRODUCT
// =====================================

editProduct(product: any) {

  this.editing = true;

  this.selectedProductId = product._id;

  this.newProduct = {

    title: product.title,

    description: product.description,

    price: product.price,

    category: product.category,

    url: product.url

  };

  this.showModal = true;

}

// =====================================
// CLOSE MODAL
// =====================================

closeModal() {

  this.showModal = false;

  this.editing = false;

  this.selectedProductId = '';

}

// =====================================
// SAVE PRODUCT
// =====================================

saveProduct() {

  if (

    !this.newProduct.title ||

    !this.newProduct.description ||

    !this.newProduct.category ||

    !this.newProduct.url

  ) {

    alert('Please fill all fields');

    return;

  }

  this.saving = true;

  if (this.editing) {

    this.productService

      .updateProduct(

        this.selectedProductId,

        this.newProduct

      )

      .subscribe({

        next: () => {

          this.loadProducts();

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

    this.productService

      .addProducts(this.newProduct)

      .subscribe({

        next: () => {

          this.loadProducts();

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

// =====================================
// PAGINATION
// =====================================

currentPage = 1;

itemsPerPage = 5;

totalPages = 0;

paginatedProducts: any[] = [];

// =====================================
// UPDATE PAGINATION
// =====================================

updatePagination() {

  const start =
    (this.currentPage - 1) * this.itemsPerPage;

  const end =
    start + this.itemsPerPage;

  this.paginatedProducts =
    this.filtered.slice(start, end);

}

previousPage() {

  if (this.currentPage > 1) {

    this.currentPage--;

    this.updatePagination();

  }

}

nextPage() {

  if (this.currentPage < this.totalPages) {

    this.currentPage++;

    this.updatePagination();

  }

}

goToPage(page: number) {

  this.currentPage = page;

  this.updatePagination();

}

get pages(): number[] {

  return Array.from(

    { length: this.totalPages },

    (_, i) => i + 1

  );

}





// =====================================
// SELECT IMAGE
// =====================================

onFileSelected(event: any) {

  const file = event.target.files[0];

  if (!file) return;

  this.selectedFile = file;

  this.previewUrl = URL.createObjectURL(file);

}

// =====================================
// UPLOAD IMAGE
// =====================================

uploadImage() {

  if (!this.selectedFile) {

    alert('Please select an image');

    return;

  }

  console.log("Uploading...", this.selectedFile);

  this.uploading = true;

  this.productService
    .uploadImage(this.selectedFile)
    .subscribe({

      next: (res: any) => {

        console.log("Cloudinary Response:", res);

        this.newProduct.url = res.url;

        console.log("Saved URL:", this.newProduct.url);

        this.previewUrl = res.url;

        this.uploading = false;

      },

      error: (err) => {

        console.log("Upload Error:", err);

        this.uploading = false;

        alert(err.error?.message || 'Upload Failed');

      }

    });

}
}