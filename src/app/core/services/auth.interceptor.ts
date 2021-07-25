import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  readonly excludeUrls = ['video'];
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.excludeUrls.includes(request.url.toLowerCase())) {
      return next.handle(request);
    }

    const newRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        `bearer ${this.authService.bearer}`
      ),
    });
    console.log(newRequest);
    return next.handle(newRequest);
  }
}