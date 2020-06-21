import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  public titulo: string ="listado de Ventas";
  public icono: string ="fa fa-shopping-cart";
  public ventas: any;
  constructor() { }

  ngOnInit(): void {
    this.ventas = JSON.parse(localStorage.getItem('ventas'))
    this.ventas = this.ventas.filter(e=>{
      let precio = 0;
      e.detalle.forEach( detalle =>{
        precio += parseFloat(detalle.precioTotal)
      })
      e.precioFactura = precio + (precio*0.16)
      return e
    })
    console.log(this.ventas)
  }

}
 