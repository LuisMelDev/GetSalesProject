import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { Usuario } from "./models/usuario.model";
import { UsuarioService } from "./services/usuario.service";
import {Cliente} from './models/cliente.model';
import { Producto } from "./models/producto.model";
import { Proveedor } from "./models/proveedor.model";

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

    let pro = localStorage.getItem('productos')

    if(!pro){
      let productos = [
        new Producto('1','Bateria 1', '',10,'20/01/2019','700','24mr','ETNA'),
        new Producto('2','Bateria 2', '',50,'20/05/2019','700','34mr','ETNA'),
        new Producto('3','Bateria 3', '',60,'20/01/2020','1100','4d','ETNA'),
      ]
      localStorage.setItem('baterias',JSON.stringify(productos))
    }

    let ven = localStorage.getItem('ventas')
    if(!ven){
      localStorage.setItem('ventas', JSON.stringify([]))
    }
    let comp = localStorage.getItem('compras')
    if(!comp){
      localStorage.setItem('compras', JSON.stringify([]))
    }
    let prove = localStorage.getItem('proveedores')
    if(!prove){
      localStorage.setItem('proveedores', JSON.stringify([
        new Proveedor('1','proveedor 1','rif de proveedor'),
        new Proveedor('2','proveedor 2','rif de proveedor'),
        new Proveedor('3','proveedor 2','rif de proveedor'),
   ]))
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
