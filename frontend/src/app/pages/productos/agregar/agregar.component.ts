import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  public producto: Producto;
  public registrado: boolean = false;
  @Input() productos: Producto[] = []
  public mensaje = 'Producto Agregado'
  public boton = 'Registrar'

  constructor() {
    this.producto = new Producto('','','',0, new Date() ,'','','')
   }

  ngOnInit(): void {
    this.producto.id = (this.productos.length+1).toString()
  }


  registrarProducto(form){
    console.log('hola')
    this.productos = [...this.productos
    ,this.producto]
    localStorage.setItem('baterias', JSON.stringify(this.productos))
    this.registrado = true;
    form.reset()
    setTimeout(()=>{
      this.registrado = false
    }, 3000)
  }
}
