import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class CurrencyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiKey = environment.appKey;

    let requestClone;
    if (apiKey) {
      requestClone = request.clone({
        setParams: {
          apiKey: apiKey,
        },
      });
    } else {
      requestClone = request;
    }

    return next.handle(requestClone);
  }
}
