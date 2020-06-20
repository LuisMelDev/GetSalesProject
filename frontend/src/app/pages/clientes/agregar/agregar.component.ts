import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarClientesComponent implements OnInit {

  public cliente: Cliente;

  public clientes: any;
  public registrado: boolean;

  constructor() {
    this.cliente = new Cliente('','','','','','','')
    this.clientes = []
    this.registrado = false;
  }

  agregar(form){
    this.clientes.push(this.cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    console.log(this.clientes)
    form.reset();
    this.registrado = true;
  }

  ngOnInit(): void {
    this.clientes = JSON.parse(localStorage.getItem('clientes'))
    console.log(this.clientes)
  }
}
