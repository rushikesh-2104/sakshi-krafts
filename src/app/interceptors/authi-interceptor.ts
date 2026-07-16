import { HttpInterceptorFn } from '@angular/common/http';

export const authiInterceptor: HttpInterceptorFn = (req, next) => {
  

  const token = localStorage.getItem('token');

  // Public APIs
  if (

    req.url.includes('/login') ||

    req.url.includes('/products') && req.method === 'GET' ||

    req.url.includes('/categories') && req.method === 'GET'

  ) {

    return next(req);

  }

  // Protected APIs
  if (token) {

    req = req.clone({

      setHeaders: {

        Authorization: `Bearer ${token}`

      }

    });

  }

  return next(req);

};


