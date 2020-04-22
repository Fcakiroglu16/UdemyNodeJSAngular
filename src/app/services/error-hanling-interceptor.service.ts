import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ErrorHanlingInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        console.log(error);
        if (error.status == "404") {
          alert("sayfa bulunamadı");
        } else {
          alert("Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz");
        }

        this.router.navigateByUrl("/");

        return throwError(error);
      })
    );

    throw new Error("Method not implemented.");
  }

  constructor(private router: Router) {}
}
