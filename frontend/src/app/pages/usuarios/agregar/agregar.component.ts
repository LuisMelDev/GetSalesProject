import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
  providers: [UsuarioService],
})
export class AgregarUsuariosComponent implements OnInit {
  public titulo: string = 'Agregar';
  public icono: string = 'fa fa-home';
  public usuario: Usuario;
  public register:any;
  public error:string;
  public usuarios: any;
  public registrado: boolean;

  constructor(private _usuarioService: UsuarioService) {
    this.usuario = new Usuario('', '', '', '', '', '', '');
    this.error = '';
    this.usuarios = [];
    this.registrado = false;

  }

  ngOnInit(): void {
    this.usuarios = JSON.parse(localStorage.getItem('usuarios'))
    this.usuario.id =  (this.usuarios.length+1).toString()
  }

  /*registrar(form) {
    this._usuarioService.createUser(this.usuario).subscribe(
      (res) => { 
        this.error = '';
        this.register = res
        form.reset()
      },
      (err) => {
        if(err.status != 500){
          this.error = "nombre de usuario ya registrado"
        }else{
          this.error = "Error interno en el sistema"
        }
      }
    );
  }*/

  registrar(form){
    this.usuarios.push(this.usuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    form.reset();
    this.registrado = true;
  }


  }



