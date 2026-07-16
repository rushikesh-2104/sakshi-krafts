import { Routes } from '@angular/router';
import { authgGuard } from './guards/authg-guard';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/product-details/product-details';
import { AAuth } from './pages/auth/auth';
import { Aboutus } from './components/aboutus/aboutus';
import { CartPage } from './pages/cart/cart';
import { WishlistPage } from './pages/wishlist/wishlist';
import { CustomOrders } from './pages/custom-orders/custom-orders';
import { Contact } from './pages/contact/contact';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { AProducts } from './pages/admin/products/products';
import { Categories } from './pages/admin/categories/categories';

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
  path: 'admin',
  component: Dashboard,
  canActivate:[authgGuard]
  },
  {
  path: 'admin/aproducts',
  component: AProducts,
  canActivate:[authgGuard]
  },
  {
    path: 'admin/categories',
    component: Categories,
    canActivate:[authgGuard]
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
    component: AAuth
  },

  {
    path: '**',
    redirectTo: ''
  }

];