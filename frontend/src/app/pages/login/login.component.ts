import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    public usuario: Usuario;
    public error: boolean = true;
    public mensaje: string = "Correo o contrañea invalido";
    public color: string = "bg-red-500"

  constructor() { 
    this.usuario = new Usuario('','','','','','','');
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log('gola');
  }

  onCerrar(bandera){
    this.error = bandera;
  }
 

}
