import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { PrecioDolarService } from "./services/precioDolar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[PrecioDolarService, AuthService]
})
export class AppComponent implements OnInit {

  @HostListener("window:close", [ "$event" ])
  beforeUnloadHander(event) {
    this._authService.logout()
  }
  
  
  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _dolarService: PrecioDolarService
  ){

  }

  ngOnInit(){
    if(this._authService.isLoggedIn()){
      this._dolarService.get().subscribe(res=>{
        console.log("precio");
      })

      this._router.navigate(['/main'])
    }else{
      this._router.navigate(['/login'])
    }
  }

 
  
  
}
