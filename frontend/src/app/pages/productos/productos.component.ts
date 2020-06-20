import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public titulo:string = "Lista de Productos"
  public icono:string = "fas fa-clipboard-list"
  constructor() { }

  ngOnInit(): void {
  }

}
