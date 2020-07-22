import { Component, OnInit } from '@angular/core';
import { BitacoraService } from "../../../services/bitacora.service";
import { UsuariosService } from "src/app/services/usuarios.service";
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  providers: [BitacoraService, UsuariosService]
})
export class BitacoraComponent implements OnInit {

  public listado:any[];
  public page: number = 1;
  public totalPages:number;
  public limit: number = 10;
  public error = false;
  public formBusqueda: FormGroup;
  public operaciones:any[];
  public usuarios:any[];


  constructor(
    private _bitacoraService:BitacoraService,
    private _usuarioService: UsuariosService,
    private fb:FormBuilder
  ) { 

  }

  ngOnInit(): void {
  	this.Listados();
  	this.formBusqueda =this.fb.group({
     valorParametro: ['',[Validators.required]]
   })  
   this._usuarioService.getAll(1000, 1).subscribe(
    (res:any) => {
         this.usuarios = res.results;
    },
      err=>{
        console.log(err)
        // this.error = true;
      } )
  }

  Listados(){
    this._bitacoraService.getAll(this.limit, this.page).subscribe(
      res =>{
        
        // console.log(res)
          
          let ope = res.results;
          this.listado = ope.map(e =>{
          let operacion = {
            fecha: '',
            mensaje: '',
            usuario: e.usuario.username
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
          // console.log(this.listado)
          this.totalPages = res.totalPages;
        
      },
      err=>{
        console.log(err)
        this.error = true;
      }
    )

    }

  paginaSiguiente(){
    this.page++;
     this.Listados();
  }
  paginaAnterior(){
    this.page--;
    this.Listados();
  }

  busqueda(){
    if(this.formBusqueda.invalid) this.Listados();
    let { valorParametro} = this.formBusqueda.value;
    this._bitacoraService.operaciones(valorParametro).subscribe(
      (res:any)=>{
        // console.log(res)
        let user = this.usuarios.find( e => e.id == valorParametro)
        this.listado = res.map(e =>{
        let operacion = {
          fecha: '',
          mensaje: '',
          usuario: user.username
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
        this.totalPages = 0;
      },
      err=>{
        console.log(err)
      }
    )
  }

}
