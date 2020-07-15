import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "src/app/services/usuarios.service";
import { AuthService } from "src/app/services/auth.service";
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers:[UsuariosService, AuthService]
})
export class DashboardComponent implements OnInit {
  date = new Date().getFullYear();

  public operaciones = [];
  public usuario:Usuario;

  constructor(
    private _usuarioService: UsuariosService,
    private _authService:AuthService
  ) {
    this.usuario = this._authService.getIdentity()
   }

  ngOnInit() {
    this._usuarioService.getOperaciones(this.usuario.id).subscribe(
      (res:any[])=>{

        res.reverse();
        let ope = [];
        for (let i = 0; i < 10; i++) {
          if(i < res.length){
            ope.push(res[i])
          }
        }
        this.operaciones = ope.map(e =>{
          let operacion = {
            fecha: '',
            mensaje: ''
          }
          let mensaje,resultado;
          switch (e.operacion) {
            case 'LOGIN':
                operacion.mensaje = 'Iniciaste sesión'      
              break;
            case 'LOGOUT':
                operacion.mensaje = 'Cerraste sesión'
              break;
            case 'DELETE':
              resultado = e.bitacora.descripcion.split('(')[0];
              mensaje = resultado.slice(0,resultado.length-1);
              operacion.mensaje = `Eliminaste un ${mensaje.toLowerCase()}`
              break;
            case 'UPDATE':
              resultado = e.bitacora.descripcion.split('(')[0];
              mensaje = resultado.slice(0,resultado.length-1);
              operacion.mensaje = `Actualizaste un ${mensaje.toLowerCase()}`
              break;
            case 'CREATE':
              resultado = e.bitacora.descripcion.split('(')[0];
              mensaje = resultado.slice(0,resultado.length-1);
              operacion.mensaje = `Registraste un ${mensaje.toLowerCase()}`
              break;
           }
          operacion.fecha = e.bitacora.fecha
          return operacion;
        })
       
      },
      err=>{
        console.log(err)
      }
    )
  }

}
