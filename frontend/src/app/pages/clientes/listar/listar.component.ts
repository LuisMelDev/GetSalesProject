import { Component, OnInit, DoCheck } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarClientesComponent implements OnInit,DoCheck {
  public clientes: Cliente[]
  public cliente: Cliente = new Cliente('','','','','','','');
  constructor() { }

  ngOnInit(): void {
    this.getClientes()

  }

  ngDoCheck(){
    this.getClientes()
  }

  getClientes(){
    this.clientes = JSON.parse(localStorage.getItem('clientes'))
  }

  agregarCliente(cliente){
    this.cliente = cliente
  }

}
