import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarProveedoresComponent implements OnInit {

  public proveedor: Proveedor;

  public proveedores: any;
  public registrado: boolean;

  constructor() {
    this.proveedor = new Proveedor('','','')
    this.proveedores = []
    this.registrado = false;
  }

  agregar(form){
    this.proveedores.push(this.proveedor);
    localStorage.setItem('proveedores', JSON.stringify(this.proveedores));
    console.log(this.proveedores)
    form.reset();
    this.registrado = true;
  }

  ngOnInit(): void {
    this.proveedores = JSON.parse(localStorage.getItem('proveedores'))
    console.log(this.proveedores)
  }
}
