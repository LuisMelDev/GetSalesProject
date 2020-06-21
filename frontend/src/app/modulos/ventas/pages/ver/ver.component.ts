import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {
  public factura: any;
  public ventas: any;
  public subtotal:number;
  public impuesto:number;
  constructor(
    private _activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ventas = JSON.parse(localStorage.getItem('ventas'));

    this._activateRoute.params.subscribe(params => {
      const id: string = params["id"];
        let venta = this.ventas.filter(e => e.id == id)
        this.factura = venta[0]
    });
    let Total = 0;
    this.factura.detalle.forEach(element => {
      Total += parseFloat(element.precioTotal)
    });
    this.subtotal = Total;
    this.impuesto = Total*0.16;
    
  }

}
