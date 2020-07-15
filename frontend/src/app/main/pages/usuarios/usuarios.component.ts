import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "src/app/services/usuarios.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from "src/app/services/roles.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  providers: [UsuariosService,RolesService]
})
export class UsuariosComponent implements OnInit {
  public usuarios:any =[];
  public formBusqueda:FormGroup;
  public limit: any = 10;
  public page: any = 1;
  public totalPages: number;
  public roles = [];
  

  constructor(
    private _usuarioService:UsuariosService,
    public _rolesService:RolesService,
    private fb:FormBuilder
  ) { 
    this.formBusqueda = this.fb.group({
      parametro:['username', Validators.required],
      valorParametro:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.traerUsuarios();
    this._rolesService.getAll().subscribe(
      (res:any)=>{
        this.roles = res.results;
      }
    )
  }

  traerUsuarios(){
    this._usuarioService.getAll(this.limit, this.page).subscribe(
      (res:any)=>{
        this.totalPages = res.totalPages;
        this.usuarios = res.results;
      },
      err=>{
        console.log(err)
      }
    )
  }

  busqueda(){
    if(this.formBusqueda.invalid) {
      this.traerUsuarios()
      return;
  };
    const {parametro, valorParametro  } = this.formBusqueda.value;

    this._usuarioService.search(parametro, valorParametro).subscribe(
      (res:any)=>{
        console.log(res)

        this.usuarios = res.map(e => {
          e.rol = this.roles.find( el => el.id === e.rol_id);          
          return e;          
      })
        this.totalPages = 0;
      },
      err=>{
        this.usuarios = [];
        console.log(err)
      }
    )
  }

  paginaSiguiente(){
    this.page++;
     this.traerUsuarios()
  }
  paginaAnterior(){
    this.page--;
    this.traerUsuarios()
  }

  
}
