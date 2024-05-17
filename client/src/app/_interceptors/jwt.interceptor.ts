import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../_service/account.service';

@Injectable()
export class jwtInterceptor implements HttpInterceptor{
  
  constructor(private accountservice: AccountService) {
    
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.accountservice.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if(user){
          request = request.clone({
            setHeaders: {
              Authorization :`Bearer ${user.token}`
            }
          })
        }
      }
    })
    return next.handle(request);
  }


}
