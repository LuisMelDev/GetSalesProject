import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  public fecha: any;
  constructor() { 
    this.fecha = "18/06/2020";
  }

  ngOnInit(): void {
  }

}
