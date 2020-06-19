import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public titulo: string ;
  public icono: string ;
  public links: any[] = [
    {
      link: '/ventas/registrar',
      nombre: 'Registrar Venta',
      icono: 'fa-plus',
      icono2:'fa-home',
      titulo:'Registrar Venta'
    },
    {
      link: '/ventas/listado',
      nombre: 'Listado De Ventas', 
      icono: 'fa-clipboard-list',
      icono2:'fa-home',
      titulo:'Consultar Ventas'
    }
  ];

  constructor(
    private _router:Router) {
      this.titulo = ''
      this.icono = ''
     }

  ngOnInit(): void {
    let index = this.links.map((value,index) => {
      if(value.link == this._router.url){
        return index
      }
      
    })[0];
    
    if(index){
      this.titulo = this.links[index].titulo
    this.icono = this.links[index].icono2
    }else{
      this.titulo = this.links[1].titulo
      this.icono = this.links[1].icono2
    }
    
  }

  cambiarTitulo(titulo, icono){
    this.titulo = titulo
    this.icono = icono
  }
}
