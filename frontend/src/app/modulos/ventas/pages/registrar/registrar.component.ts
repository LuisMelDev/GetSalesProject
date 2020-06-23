import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from "src/app/models/cliente.model";
import { Producto } from 'src/app/models/producto.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers:[ClienteService]
})
export class RegistrarComponent implements OnInit {
  public titulo: string ="Registrar Venta";
  public icono: string ="fa fa-shopping-cart";
  public fecha: any;
  public resultados: any;
  public cliente:Cliente;
  public clientes:Cliente[];
  public baterias: Producto[];
  public bateria: any;
  public venta: any;
  public precioProd: string;
  public cantidadProd: string;
  public impuesto: number = 0.16
  public precioFac:number = 0
  public ventas: any;
  constructor(private _clienteService: ClienteService, private _router: Router) {
    this.fecha = new Date();

    this.cliente = new Cliente('','','','','','','')
    this.bateria = {
      nombre: '',
      marca_id: '',
      amperaje_id: '',
      grupo_id:'',
      inventario: 0
    }
    this.clientes = []
    this.precioProd = ''
    this.cantidadProd = ''
    
  }

  ngOnInit(): void {
    this.clientes = JSON.parse(localStorage.getItem('clientes'))
    this.baterias = JSON.parse(localStorage.getItem('baterias'))
    this.ventas = JSON.parse(localStorage.getItem('ventas'))
    
    this.venta = {
      id: this.ventas.length + 1 || 1,
      cliente: {
        cedula:'',
        nombre: ''
      },
      usuario: 'Usuario',
      fecha: this.fecha,
      detalle: []
    }
  }

  buscarCliente() {
    // console.log(this.cliente.cedula.length)
    // if(this.cliente.cedula.length != 0){
    //   this._clienteService.searchWithCedula(this.cliente.cedula).subscribe(
    //     (res) => {
    //       console.log(res)
    //       this.resultados = res
    //     },
    //     (err) => {
    //       console.log(err)
    //     }
    //   );
    // }else{
    //   this.resultados = ''
    // }

    
  }

  addCliente(entidad){
    console.log(entidad)
    this.venta.cliente = entidad
  }
  addBateria(bate){
    this.bateria = bate;
  }

  agregarProducto(){
    let detalle = {
      bateria: this.bateria,
      precio: parseFloat(this.precioProd),
      cantidad: parseInt(this.cantidadProd),
      precioTotal: parseInt(this.cantidadProd) * parseFloat(this.precioProd)
    }

    this.venta.detalle.push(detalle)
    this.precioFactura()
    this.bateria = {
      nombre: '',
      marca_id: '',
      amperaje_id: '',
      grupo_id:'',
      inventario: 0
    }
    this.precioProd = '';
    this.cantidadProd = ''
  }

  isValid(){
    if( parseFloat(this.precioProd) <= 0 || parseInt(this.cantidadProd) <= 0 || parseInt(this.cantidadProd) > this.bateria.inventario || !this.bateria.nombre || this.precioProd.length == 0 || this.cantidadProd.length == 0  || this.venta.cliente.cedula == '' ){
      return true
    }
    return false
    
  }

  deleteBateria(index){
    this.venta.detalle = this.venta.detalle.filter((element,i) => {
      
      if(index != i) return element
    
    })
    this.precioFactura()
  }

  precioFactura(){
    let precio = 0
    this.venta.detalle.forEach(element => {
      precio += parseFloat(element.precio) * parseInt(element.cantidad)
    });

    this.precioFac = precio + (precio*this.impuesto)
  }

  registrar(){
    this.ventas.push(this.venta)
    localStorage.setItem('ventas',JSON.stringify(this.ventas))
    this._router.navigate(['/ventas/factura', this.venta.id])
    // this.venta = {
    //   id: this.ventas.length + 1 || 1,
    //   cliente: {
    //     cedula:'',
    //     nombre: ''
    //   },
    //   usuario: 'Usuario',
    //   fecha: this.fecha,
    //   detalle: []
    // }
    // this.precioFac = 0.0
  }

  enviar(){
    if(this.venta.cliente.nombre.length == 0 || this.venta.detalle.length == 0){
      return true
    }
    return false;
  }
}
