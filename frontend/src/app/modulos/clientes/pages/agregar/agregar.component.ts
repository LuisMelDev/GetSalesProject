import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public titulo: string = 'Agregar Cliente';
  public icono: string = 'fas fa-home';
  public links: any[] = [
    {
      link: '/clientes/agregar',
      nombre: 'Agregar Cliente',
      icono: 'fa-plus',
    },
    {
      link: '/clientes/listado',
      nombre: 'Listado De Clientes',
      icono: 'fa-clipboard-list',
    },
    {
      link: '/clientes/busqueda',
      nombre: 'Buscar',
      icono: 'fa-search',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
