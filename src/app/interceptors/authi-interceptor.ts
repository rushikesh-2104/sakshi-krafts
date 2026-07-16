import { HttpInterceptorFn } from '@angular/common/http';

export const authiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Interceptor Hit");

  const token = localStorage.getItem('token');
console.log(token);
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


