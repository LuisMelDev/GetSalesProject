import { Component, OnInit } from '@angular/core';
import { Cliente } from "src/app/models/cliente.model";

@Component({
  selector: 'app-agregar',
  // templateUrl: '../../../ventas/pages/registrar/registrar.component.html',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  public fecha: any;
  public resultados: any;
  public cliente:Cliente;

  constructor() {
    this.fecha = '18/06/2020';
    this.cliente = new Cliente('','','','','','','')
  }

  ngOnInit(): void {}

  buscarCliente() {
    // this._clienteService.searchWithCedula(this.cliente.cedula).subscribe(
    //   (res) => {
    //     console.log(res)
    //     this.resultados = res
    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    // );
  }
}
