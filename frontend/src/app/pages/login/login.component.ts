import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario.model";
import { UsuarioService} from "../../services/usuario.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  public identificado: any;
  public status: string;
  constructor(
    private _userService: UsuarioService,
    private _router:Router
  ) {
    this.usuario = new Usuario('','','','','','','')
    this.status = ''
   }

  ngOnInit(): void {
    if(this._userService.getIdentity()){
      this._router.navigate(['/dashboard'])
    }
  }

  login(){
    localStorage.setItem('usuario',JSON.stringify(new Usuario('13','Administrador','12','Administrador','admin','admin','admin')))   
    this._router.navigate(['/dashboard'])
    // this._userService.login(this.usuario).subscribe(
    //   res=>{
    //     localStorage.setItem('token', res.token) 
    //     localStorage.setItem('usuario',JSON.stringify(new Usuario('13','Administrador','12','Luis Melendez','melendez','','')))     
    //     this._router.navigate(['/dashboard'])
    //   },
    //   err=>{
    //     if(err.status == 404){
    //       this.status = "Usuario o contraseña invalida"
    //     }else{
    //       this.status = "Ha ocurrido un error al iniciar sesion"
    //     }
    //   }
    // )
  }


}
 