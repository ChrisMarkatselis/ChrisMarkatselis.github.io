import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.endsWith('/bugs')) {
        req = req.clone({
            setHeaders: { Authorization: 'code.hub.ng5.token'
            }
        });
    }
    return next.handle(req);
  }
}
