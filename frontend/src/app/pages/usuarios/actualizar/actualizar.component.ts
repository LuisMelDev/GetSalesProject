import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario.model";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: '../agregar/agregar.component.html',
  styleUrls: ['./actualizar.component.scss'],
  providers:[UsuarioService]
})
export class ActualizarUsuariosComponent implements OnInit {

  public titulo: string = 'Agregar';
  public icono: string = 'fa fa-home';
  public usuario: any;
  public register:any;
  public error:string;
  public id:string;
  constructor(private _usuarioService: UsuarioService, private _activateRoute:ActivatedRoute, private _route:Router) {
    this.usuario = new Usuario('', '', '', '', '', '', '');
    this.error = '';
  }

  ngOnInit(): void {
    console.log
    this._activateRoute.params.subscribe(params => {
      this.id = params["id"];
      this._usuarioService.get(this.id)
        .subscribe((res) => {
          console.log(res)
          this.usuario = res;
          this.usuario.password = ''
        },
        err=>{
          this._route.navigate(['/usuarios/listado'])
        });
    });
  }

  registrar(form) {
    this._usuarioService.updateUser(this.usuario,this.id).subscribe(
      (res) => { 
        
          this._route.navigate(['/usuarios/usuario/', this.id])
        
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
