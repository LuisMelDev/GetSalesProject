import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [UsuarioService],
})
export class ListarUsuariosComponent implements OnInit {
  public indice: number = 1;
  public error: boolean = false;
  public titulo: string = 'Listado de Usuarios';
  public icono: string = 'fa fa-home';
  public busqueda: string;
  public ListUsers:any;
  public username: string;
  @Input() usuarios:any = [];
  public usuario:Usuario = new Usuario('','','','','','','')

  constructor(public _userService: UsuarioService) {
    this.busqueda = '';
    this.ListUsers= [];
        this.username = '';


  }

  ngOnInit(): void {


    /*this._userService.getAll(this.indice).subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => {
        this.error = true;
      }
    );
*/
  }

  next(){
   
      this.indice++;
    
      this._userService.getAll(this.indice).subscribe(
      (res) => {
        
        this.usuarios = res;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  previus(){
    if(this.indice > 1){
      this.indice--;
    }else{
      this.indice = 1
    }
    this._userService.getAll(this.indice).subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => {
        this.error = true;
      }
      );
  }

  buscar() {
/*

let user = this.usuarios;

console.log(user[0]["username"]);

  if(this.username != user[0]["username"]){
    alert("no exite usuario");
  }else{
    alert("usuario encontado");
  }
    


    this._userService.search(this.busqueda).subscribe(
      (res) => {
        this.usuarios = res
      },
      (err) => {
        this.error = true
      }
    );*/
  }
 
delete(index){

  this.usuarios.splice(index,1);
  localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  this.usuarios= JSON.parse(localStorage.getItem('usuarios'));

  console.log(this.usuarios)

 
}

  setUsuario(usuario){
    this.usuario = usuario;
  }


}



