import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { Usuario } from "./models/usuario.model";
import { UsuarioService } from "./services/usuario.service";
import {Cliente} from './models/cliente.model'

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

    let cli = localStorage.getItem('clientes')
    if(!cli){
      let clientes = [
        new Cliente('1','26136504','Luis Melendez','barquisimeto','27/02/1998', '04262782969','luis@luis.com'),
        new Cliente('2','15478256','jodefina','barquisimeto','5/12/1900', '04257524584','jodefina@jodefina.com')
      ];

      localStorage.setItem('clientes', JSON.stringify(clientes))
    }
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
