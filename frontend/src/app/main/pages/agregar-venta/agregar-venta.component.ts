import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientesService } from "src/app/services/clientes.service";
import { AuthService } from "src/app/services/auth.service";
import { VentasService } from "src/app/services/ventas.service";
import { PrecioDolarService } from "src/app/services/precioDolar.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  providers: [ClientesService,AuthService,VentasService,PrecioDolarService]
})
export class AgregarVentaComponent implements OnInit {

  public usuario;
  public cliente: any = '';
  public producto: any = '';
  public fecha = new Date();
  public cantidadProducto: FormControl;
  public precioProducto: FormControl;
  public mensaje = '';
  public mensaje2 = '';

  public productosVenta = [];
  public precioVenta = 0;
  public impuesto = 0;
  public precioDolar = 0;

  constructor(
    private _route: ActivatedRoute,
    private _clienteService: ClientesService,
    private _ventaService: VentasService,
    private _authService: AuthService,
    private _precioDolarService:PrecioDolarService
  ) {
    this.cantidadProducto = new FormControl('', [Validators.pattern(/^([0-9])*$/), Validators.required])
    this.precioProducto = new FormControl('', [Validators.pattern(/^([0-9])*$/), Validators.required])
    this.usuario = this._authService.getIdentity();
    this.precioDolar = parseFloat(this._precioDolarService.precio());
  }

  ngOnInit(): void {
    if (this._route.snapshot.params.clienteID !== undefined) {
      this._clienteService.getById(this._route.snapshot.params.clienteID).subscribe(
        res => {
          this.cliente = res;
        },
        err => {
          console.log(err)
        }
      )
    }

  }

  AgregarProducto() {
    this.mensaje = '';
    if (this.cantidadProducto.hasError('required') || this.precioProducto.hasError('required')) {
      this.mensaje = 'Debe colocar precio y cantidad del producto';
      return;
    } else if (this.cantidadProducto.hasError('pattern') || this.precioProducto.hasError('pattern')) {
      this.mensaje = 'El precio y cantidad de producto deben ser numeros';
      return;
    } else if (parseInt(this.cantidadProducto.value) < 1 || parseFloat(this.precioProducto.value) < 1) {
      this.mensaje = 'El precio y cantidad deben ser positivas';
      return;
    }else if(parseInt(this.cantidadProducto.value) > parseInt(this.producto.inventario.existencia_producto)){
      this.mensaje = 'La cantidad de producto no puede ser mayor a la disponible en inventario';
      return;
    }

    let item = {
      producto: this.producto,
      cantidad: parseInt(this.cantidadProducto.value),
      precio: parseFloat(this.precioProducto.value)
    }

    let encontrado = this.productosVenta.find(e => e.producto === this.producto);

    if (encontrado) {
      this.productosVenta = this.productosVenta.map(e => {
        if (e.producto === this.producto) {
          return item;
        }
        return e;
      })
    } else this.productosVenta.push(item);
    this.actualizarPrecios()
    this.producto = '';
    this.cantidadProducto.reset()
    this.precioProducto.reset()
  }

  eliminarProducto(index) {
    this.productosVenta.splice(index, 1);
    this.actualizarPrecios()
  }

  clienteElegido(e) {
    this.cliente = e;
  }

  productoElegido(e) {
    this.producto = e;
  }

  enviar() {
    if(!this.cliente){
      this.mensaje2 = 'Debe agregar un cliente para registrar la venta'
      return;
    }else if(this.productosVenta.length === 0){
      this.mensaje2 = 'Debe agregar al menos un producto para registrar la venta'
      return;
    }
    let compra = {

      usuario_id: this.usuario.id,
      cliente_id: this.cliente.id,
      detalles: this.productosVenta.map(e => {
        let detalle = {
          producto_id: e.producto.id,
          cantidad_producto: e.cantidad,
          precio_producto: e.precio
        }
        return detalle;
      })
    }
    console.log(compra)

    this._ventaService.create(compra).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  actualizarPrecios(){
    this.precioVenta = 0;
    this.productosVenta.forEach(e => {
      this.precioVenta += e.precio * e.cantidad;
    });
    this.impuesto = this.precioVenta * 0.16;
    this.precioVenta = this.precioVenta + this.impuesto;
  }
}
