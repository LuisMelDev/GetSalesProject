import { Component, OnInit } from '@angular/core';
import { Router, } from "@angular/router";

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
      link: '/clientes/agregar',
      nombre: 'Agregar Cliente',
      icono: 'fa-plus',
      icono2:'fa-home',
      titulo:'Agregar cliente'
    },
    {
      link: '/clientes/listado',
      nombre: 'Listado De Clientes',
      icono: 'fa-clipboard-list',
      icono2:'fa-home',
      titulo:'Lista de clientes'
    },
    {
      link: '/clientes/busqueda',
      nombre: 'Buscar',
      icono: 'fa-search',
      icono2:'fa-home',
      titulo:'Buscar Cliente'
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
