import { Component, OnInit, Input } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-actualizar-proveedor',
  // templateUrl: '../agregar/agregar.component.html',
  templateUrl:'./actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarProveedoresComponent implements OnInit {
  
  @Input() proveedor: Proveedor = new Proveedor('','','');
  public actualizado :boolean = false;
  public proveedores: Proveedor[];
  constructor() { }

  agregar(form){
    this.proveedores = this.proveedores.map(prove=>{
      if(prove.id == this.proveedor.id){
        prove = this.proveedor
      }
      return prove
    })

   localStorage.setItem('proveedores', JSON.stringify(this.proveedores));
    form.reset();
    $('#modalActualizar').modal('hide')
  }

  ngOnInit(): void {
    this.proveedores = JSON.parse(localStorage.getItem('proveedores'))
    console.log(this.proveedores)
  }

}
