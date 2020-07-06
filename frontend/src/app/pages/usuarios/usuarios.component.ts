import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit,DoCheck {
  public titulo:string = "Lista de Usuarios"
  public icono:string = "fas fa-clipboard-list"
  public usuarios: Usuario[] = []
  constructor() { }

  ngOnInit(): void {
    this.getUsuarios()
  }

  ngDoCheck(){
    this.getUsuarios()
  }

  getUsuarios(){
    this.usuarios = JSON.parse(localStorage.getItem('usuarios'))
  }
}
