import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserLoginService } from '../user-login.service';
import { isUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  request= new Subject<boolean>();
  constructor(private loginService:UserLoginService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('token')!=null){
        this.getRol(next.data.roles);
        return this.request.asObservable().pipe(res=>{return res})
      }else{
        this.router.navigateByUrl("/login");
      }
  }
  getRol(roles:string[]){
    this.loginService.getLoggedUserProfile().subscribe((res:any)=>{
      if(roles.includes(res.rol)){
        this.request.next(true);
      }else{
        this.request.next(false);
      }
    })
  }
}
