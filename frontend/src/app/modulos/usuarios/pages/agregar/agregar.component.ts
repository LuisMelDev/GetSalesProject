import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
  providers: [UsuarioService],
})
export class AgregarComponent implements OnInit {
  public titulo: string = 'Agregar';
  public icono: string = 'fa fa-home';
  public usuario: Usuario;
  public password2: string;
  public register:any;
  public error:string;
  constructor(private _usuarioService: UsuarioService) {
    this.usuario = new Usuario('', '', '', '', '', '', '');
    this.password2 = '';
    this.error = '';
  }

  ngOnInit(): void {}

  registrar(form) {
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
  }
}
