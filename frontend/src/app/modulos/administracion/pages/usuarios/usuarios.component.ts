import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  
})
export class UsuariosComponent implements OnInit {

  public titulo: string = "Listado de Usuarios"
  public icono: string = "fas fa-clipboard-list"
  public nmostrar:number;
  public userUpdate:number;

  constructor() {
    this.userUpdate = 0
   }

  ngOnInit(): void {
    this.mostrar(1)
  }
  //esta funcion es para mostrar la parte de listado, agregar, actualizar;
  mostrar(mostrar, idUser = 0){
    this.nmostrar = mostrar
    this.userUpdate = idUser
  }
}
