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
        console.log(res);
        // res.reverse();
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
            switch (e.operacion.operacion) {
              case 'LOGIN':
                  operacion.mensaje = 'Inicio sesión'      
                break;
              case 'LOGOUT':
                  operacion.mensaje = 'Cerro sesión'
                break;
              case 'DELETE':
                resultado = e.descripcion.split('(')[0];
                mensaje = resultado.slice(0,resultado.length-1);
                operacion.mensaje = `Elimino un ${mensaje.toLowerCase()}`
                break;
              case 'UPDATE':
                resultado = e.descripcion.split('(')[0];
                mensaje = resultado.slice(0,resultado.length-1);
                operacion.mensaje = `Actualizo un ${mensaje.toLowerCase()}`
                break;
              case 'CREATE':
                resultado = e.descripcion.split('(')[0];
                mensaje = resultado.slice(0,resultado.length-1);
                operacion.mensaje = `Registro un ${mensaje.toLowerCase()}`
                break;
             }
            operacion.fecha = e.fecha
            return operacion;
          });
       
      },
      err=>{
        console.log(err)
      }
    )
  }

}
