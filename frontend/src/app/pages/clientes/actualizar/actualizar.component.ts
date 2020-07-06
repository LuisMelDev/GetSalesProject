import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: '../agregar/agregar.component.html',
  // templateUrl:'./actualizar.component.html',
  styleUrls: ['./actualizar.component.scss'],
})
export class ActualizarClientesComponent implements OnInit, DoCheck {
  @Input() cliente: Cliente = new Cliente('', '', '', '', '', '', '');
  public boton: string = 'Actualizar';
  @Input() public clientes: Cliente[] = [];
  public mensaje = 'El cliente ha sido actualizado ';

  public registrado: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    console.log(this.cliente);
  }

  agregar(form) {
    this.clientes = this.clientes.map((cliente) => {
      if (cliente.id === this.cliente.id) {
        return this.cliente;
      }
      return cliente;
    });

    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    form.reset();
    this.registrado = true;
    setTimeout(() => {
      this.registrado = false;
    }, 3000);
  }
}
