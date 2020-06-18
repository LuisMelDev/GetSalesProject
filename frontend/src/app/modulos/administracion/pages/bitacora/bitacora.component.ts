import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent implements OnInit {
  public titulo:string = "Bitacora"
  public icono: string = "fa fa-home"
  public mensaje:string= ""
  constructor() { }

  ngOnInit(): void {
  }

}
