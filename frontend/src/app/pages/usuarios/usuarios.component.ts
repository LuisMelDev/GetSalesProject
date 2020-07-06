import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  public titulo:string = "Lista de Usuarioooooooos"
  public icono:string = "fas fa-clipboard-list"
  constructor() { }

  ngOnInit(): void {
  }

}
