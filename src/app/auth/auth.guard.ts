import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

  constructor(private auth:AuthService, private router:Router){}

  canActivate( activate:ActivatedRouteSnapshot,
     state:RouterStateSnapshot){
       if(this.auth.isAuth()){
         return true
       }else{
         this.router.navigate(['/logIn'])
       }
     }


}
