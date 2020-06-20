import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  public titulo:string = "Lista de clientes"
  public icono:string = "fas fa-clipboard-list"
  constructor() { }

  ngOnInit(): void {
  }

}
