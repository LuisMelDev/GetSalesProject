import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { Usuario } from "./models/usuario.model";
import { UsuarioService } from "./services/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsuarioService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'GetSales';
  public usuario: Usuario;
  public hamburguer:boolean;
  
  constructor( 
    private _router :Router,
    private _usuarioService:UsuarioService
  ){
    this.usuario = new Usuario('','','','','','',''); 
    this.hamburguer = false;
  }

  ngOnInit(){
    this.getIdentity()

    this.navigate()
  }

  ngDoCheck(){
    this.getIdentity()
  }

  toggleMenu(){
        this.hamburguer = !this.hamburguer
  }

  getIdentity(){
    let usuario = this._usuarioService.getIdentity()
    
    if(usuario){
      this.usuario = usuario
    }
  }

  logout(){
    this._usuarioService.logout()
    this.usuario = new Usuario('','','','','','','');
    this.navigate()

  }

  navigate(){
    if(!this.usuario.id){
      this._router.navigate(['login'])
    }
  }
}
