import { Component, OnInit, Input } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';


@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarProveedoresComponent implements OnInit {

  @Input() proveedores:any = [];
  public proveedor:Proveedor = new Proveedor('','','')

  constructor() { }

  ngOnInit(): void {
  
  }

  setProveedor(proveedor){
    this.proveedor = proveedor
  }

}
