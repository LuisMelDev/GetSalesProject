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
     parametro: ['usuario_id'],
     valorParametro: ['',[Validators.required]]
   })  
   
  }

  Listados(){
    this._bitacoraService.getAll(this.limit, this.page).subscribe(
      res =>{
        if(res.totalPages && res.results){
          this.listado = res.results;
          this.totalPages = res.totalPages;
        }
      },
      err=>{
        console.log(err)
        this.error = true;
      }
    )

    this._usuarioService.getAll(this.limit, this.page).subscribe(
        (res:any) => {
            if(res.totalPages && res.results){
              this.usuarios = res.results;
              this.totalPages = res.totalPages;
            }

          },
          err=>{
            console.log(err)
            this.error = true;
          } )

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
    let {parametro, valorParametro} = this.formBusqueda.value;
    this._bitacoraService.search(parametro, valorParametro).subscribe(
      (res:any)=>{
        this.listado = res
        this.totalPages = 0;
      },
      err=>{
        console.log(err)
      }
    )
  }

}
