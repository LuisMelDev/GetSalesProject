import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar',
  // templateUrl: '../../../ventas/pages/listado/listado.component.html',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  public titulo: string ="listado de Compras";
  public icono: string ="fa fa-home";
  public ventas: any;
  constructor() { }

  ngOnInit(): void {
    this.ventas = JSON.parse(localStorage.getItem('compras'))
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
