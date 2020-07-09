import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @HostListener("window:close", [ "$event" ])
  beforeUnloadHander(event) {
    this._authService.logout()
  }
  
  
  constructor(
    private _router: Router,
    private _authService: AuthService
  ){

  }

  ngOnInit(){
    if(this._authService.isLoggedIn()){
      this._router.navigate(['/main'])
    }else{
      this._router.navigate(['/login'])
    }
  }

 
  
  
}
