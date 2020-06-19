import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: '../../../ventas/pages/registrar/registrar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  public fecha: any;
  constructor() { 
    this.fecha = "10/10/2020"
  }

  ngOnInit(): void {
  }

}
