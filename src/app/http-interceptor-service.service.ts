// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptorService } from 'http-interceptor.service';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { UserService } from './webservice/user.service';
// import { AuthService } from './webservice/auth.service';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpInterceptorServiceService {
//   private authService: UserService;

//   constructor(private injector: Injector) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.authService = this.injector.get(UserService);
//     let token = this.authService.isAuth() ? localStorage.user_login ? JSON.parse(localStorage.user_login).token : 'undefined' : 'undefined';
//     const authRequest = request.clone({
//       headers: request.headers.set('Authorization', 'Bearer ' + token),
//     });
//     return next.handle(authRequest);
//   }
// }
