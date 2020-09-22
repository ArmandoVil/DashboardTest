import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = "(Client) Internal Error:" + error.error.message;
        } else {
          errorMsg = "(Server) Server Error\n Status:" + error.status + "\n Error:" + error.message;
        }
        console.log(errorMsg);
        console.log("FULL ERROR:", error);
        return throwError(errorMsg);
      })
    );
  }
}
