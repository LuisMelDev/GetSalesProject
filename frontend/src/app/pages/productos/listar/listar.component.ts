import { Component, OnInit, DoCheck } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarProductoComponent implements OnInit, DoCheck {
  public productos: Producto[];
  public producto: Producto;
  constructor() { }

  ngOnInit(): void {
    this.getProductos()
  }

  ngDoCheck(){
    this.getProductos()
  }

  getProductos(){
    this.productos = JSON.parse(localStorage.getItem('baterias'))
  }

  setProducto(producto){
    this.producto = producto
  }

}
