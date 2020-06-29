import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    public usuario: Usuario;
    public error: boolean = false;

  constructor() { 
    this.usuario = new Usuario('','','','','','','');
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log('gola');
  }
 

}
