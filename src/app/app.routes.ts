import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/product-details/product-details';
import { Auth } from './pages/auth/auth';
import { Aboutus } from './components/aboutus/aboutus';
import { CartPage } from './pages/cart/cart';
import { WishlistPage } from './pages/wishlist/wishlist';
import { CustomOrders } from './pages/custom-orders/custom-orders';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },
  {
  path:'wishlist',
  component: WishlistPage
},
{
  path:"custom",
  component:CustomOrders
},
  {
  path: 'cart',
  component: CartPage
  },
  {
    path:"aboutus",component:Aboutus
  },
  {
    path:'contact',
    component:Contact
  },
  {
    path: 'products',
    component: Products
  },

  {
    path: 'products/:id',
    component: ProductDetails
  },

  {
    path: 'auth',
    component: Auth
  },

  {
    path: '**',
    redirectTo: ''
  }

];