import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: '../agregar/agregar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarProductoComponent implements OnInit {
  @Input() producto: Producto = new Producto('','','',0,'','','','')
  @Input() productos: Producto[] = []
  public registrado: boolean = false;
  public boton = 'Actualizar'
  public mensaje = 'Producto Actualizado'
  constructor() { }

  ngOnInit(): void {
  }

  registrarProducto(form){
   this.productos = this.productos.map(producto =>{

      if(this.producto.id === producto.id) return this.producto;
      return producto;

    })
    localStorage.setItem('baterias',JSON.stringify(this.productos))
    this.registrado = true;
    setTimeout(() => {
        this.registrado = false
    }, 3000);
  }
}
