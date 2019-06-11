// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { tap } from 'rxjs/operators';


// @Injectable()

// export class CustomInterceptor implements HttpInterceptor {
//   constructor(private loginService: LoginService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     if (!req.url.endsWith('/bugs')) {
//       if () {
//         req = req.clone({
//           setHeaders: {
//             Authorization: 'ng5.dsadasdasdsa'
//           }
//         });
//       }
//     }

//     return next.handle(req);
//   }
// }
