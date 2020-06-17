import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GetSales';
  public usuario: any;
  constructor( 
    private _router :Router
  ){
    this.usuario = true;
  }

  ngOnInit(){
    if(!this.usuario){
      this._router.navigate(['login'])
    }
  }

}
