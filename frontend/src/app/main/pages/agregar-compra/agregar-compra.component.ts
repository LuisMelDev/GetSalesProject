import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute ,Router} from "@angular/router";
import { ProveedoresService } from "src/app/services/proveedores.service";
import { AuthService } from "src/app/services/auth.service";
import { CompraService } from "src/app/services/compra.service";
import { PrecioDolarService } from "src/app/services/precioDolar.service";

@Component({
  selector: 'app-agregar-compra',
  templateUrl: './agregar-compra.component.html',
  providers: [ProveedoresService, AuthService, CompraService,PrecioDolarService]
})
export class AgregarCompraComponent implements OnInit {

  public alerta = '';
  public color = 'bg-red-600';

  public proveedor: any = '';
  public producto: any = '';
  public fecha = new Date();
  public cantidadProducto: FormControl;
  public precioProducto: FormControl;
  public mensaje = '';
  public mensaje2 = '';
  public usuario;

  public productosCompra = [];
  public precioCompra = 0;
  public impuesto = 0;
  public precioDolar=0;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _proveedorService: ProveedoresService,
    private _authService: AuthService,
    private _compraService: CompraService,
    private _precioDolarService:PrecioDolarService
  ) {
    this.cantidadProducto = new FormControl('', [Validators.pattern(/^([0-9])*$/), Validators.required])
    this.precioProducto = new FormControl('', [Validators.pattern(/^([0-9])*$/), Validators.required])
    this.usuario = this._authService.getIdentity();
    this.precioDolar = parseFloat(this._precioDolarService.precio());
  }

  ngOnInit(): void {

    if (this._route.snapshot.params.proveedorID !== undefined) {
      this._proveedorService.getById(this._route.snapshot.params.proveedorID).subscribe(
        res => {
          this.proveedor = res;
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
    }

    let item = {
      producto: this.producto,
      cantidad: parseInt(this.cantidadProducto.value),
      precio: parseFloat(this.precioProducto.value)
    }

    let encontrado = this.productosCompra.find(e => e.producto === this.producto);

    if (encontrado) {
      this.productosCompra = this.productosCompra.map(e => {
        if (e.producto === this.producto) {
          return item;
        }
        return e;
      })
    } else this.productosCompra.push(item);
    this.actualizarPrecios();
    this.producto = '';
    this.cantidadProducto.reset()
    this.precioProducto.reset()
  }

  eliminarProducto(index) {
    this.productosCompra.splice(index, 1);
    this.actualizarPrecios()
  }

  proveedorElegido(e) {
    this.proveedor = e;
  }

  productoElegido(e) {
    this.producto = e;
  }

  enviar() {
    if (!this.proveedor) {
      this.mensaje2 = 'Debe agregar un proveedor para registrar la compra'
      return;
    } else if (this.productosCompra.length === 0) {
      this.mensaje2 = 'Debe agregar al menos un producto para registrar la compra'
      return;
    }
    let compra = {

      usuario_id: this.usuario.id,
      proveedor_id: this.proveedor.id,
      detalles: this.productosCompra.map(e => {
        let detalle = {
          producto_id: e.producto.id,
          cantidad_producto: e.cantidad,
          precio_producto: e.precio
        }
        return detalle;
      })
    }
    console.log(compra)

    this._compraService.create(compra).subscribe(
      (res:any) => {
        if(res.id) this._router.navigate(['/main/compra', res.id]);
      },
      (err:any) => {
        this.alerta = err.message
      }
    )
  }

  actualizarPrecios() {
    this.precioCompra = 0;
    this.productosCompra.forEach(e => {
      this.precioCompra += e.precio * e.cantidad;
    });
    this.impuesto = this.precioCompra * 0.16;
    this.precioCompra = this.precioCompra + this.impuesto;
  }

}
