import { Component, OnInit, DoCheck } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit,DoCheck {
  public titulo:string = "Consultar Proveedores"
  public icono:string = "fa fa-truck"
  public proveedores: Proveedor[] = []
  constructor() { }

  ngOnInit(): void {
    this.getProveedores()
  }

  ngDoCheck(){
    this.getProveedores()
  }

  getProveedores(){
    this.proveedores = JSON.parse(localStorage.getItem('proveedores'))
  }
}
