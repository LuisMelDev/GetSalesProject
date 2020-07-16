import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { PrecioDolarService } from 'src/app/services/precioDolar.service';


@Component({
  selector: 'app-factura-venta',
  templateUrl: './factura-venta.component.html',
  providers:[VentasService,ProductoService,PrecioDolarService]
})
export class FacturaVentaComponent implements OnInit {

  public venta:any;
  public productos;
  public dolar;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _ventaService:VentasService,
    private _productosService:ProductoService,
    private _precioDolarService: PrecioDolarService
  ) {
    this.dolar = parseFloat(this._precioDolarService.precio())
   }

  ngOnInit(): void {
    if(this._route.snapshot.params.id){
      this._productosService.getAll(1000,1).subscribe((res:any)=>{
        this.productos = res.results;

        this._ventaService.getById(this._route.snapshot.params.id).subscribe(
          (response:any)=>{
             let detalles = response.detalles.map( e => {
                let producto = this.productos.find( el => el.id === e.producto_id)
                e.producto = producto;
                return e;
             })
             this.venta = response;
             this.venta.detalles = detalles;

             let subtotal = 0;
             this.venta.detalles.forEach(e =>{
              subtotal += e.cantidad_producto*e.precio_producto
             })

             let impuesto = subtotal*0.16;
             let total = impuesto + subtotal;

             this.venta.subtotal = subtotal;
             this.venta.impuesto = impuesto;
             this.venta.total = total;

            //  console.log(this.venta)
          },
          err=>{
            this._router.navigate(['/main/consultar-ventas'])
            // console.log(err)  
          }
        );
      })
      
      
    }else{
      this._router.navigate(['/main'])
    }
  }

}
