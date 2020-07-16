import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { PrecioDolarService } from 'src/app/services/precioDolar.service';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-factura-compra',
  templateUrl: './factura-compra.component.html',
  providers:[CompraService,ProductoService,PrecioDolarService]
})
export class FacturaCompraComponent implements OnInit {

  public compra:any;
  public productos;
  public dolar;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _compraService:CompraService,
    private _productosService:ProductoService,
    private _precioDolarService: PrecioDolarService
  ) {
    this.dolar = parseFloat(this._precioDolarService.precio())
   }

  ngOnInit(): void {
    if(this._route.snapshot.params.id){
      this._productosService.getAll(1000,1).subscribe((res:any)=>{
        this.productos = res.results;

        this._compraService.getById(this._route.snapshot.params.id).subscribe(
          (response:any)=>{
             let detalles = response.detalles.map( e => {
                let producto = this.productos.find( el => el.id === e.producto_id)
                e.producto = producto;
                return e;
             })
             this.compra = response;
             this.compra.detalles = detalles;

             let subtotal = 0;
             this.compra.detalles.forEach(e =>{
              subtotal += e.cantidad_producto*e.precio_producto
             })

             let impuesto = subtotal*0.16;
             let total = impuesto + subtotal;

             this.compra.subtotal = subtotal;
             this.compra.impuesto = impuesto;
             this.compra.total = total;

            //  console.log(this.compra)
          },
          err=>{
           this._router.navigate(['/main/consultar-compras'])
          }
        );
      })
      
      
    }else{
      this._router.navigate(['/main'])
    }
  }

}
