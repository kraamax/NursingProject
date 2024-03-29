import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators"
import { Router } from "@angular/router";
import { UserLoginService } from "../user-login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router: Router, private loginService:UserLoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        if(localStorage.getItem('token')!=null)
        {
            this.loginService.getRol();
            const clonedReq= req.clone({
                headers:req.headers.set('Authorization', 'Bearer '+ localStorage.getItem('token'))
            })
            return next.handle(clonedReq).pipe(tap(
                succ=>{},
                err=>{
                    if(err.status==401){
                        localStorage.removeItem('token');
                        localStorage.removeItem('role');
                        this.router.navigateByUrl("/login");
                    }
                }
            ))
        }
        else
        {
            return next.handle(req.clone());
        }
    }

}