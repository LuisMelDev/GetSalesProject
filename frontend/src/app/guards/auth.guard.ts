import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private _router: Router,
    private _userService: AuthService
  ) { }

  canActivate(){
    
    if(this._userService.isLoggedIn()){
      
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
}