import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  public error: boolean = false;
  public mensaje: string;
  public color: string;

  constructor(private _authService: AuthService, private _router: Router) {
    this.usuario = new Usuario('', '', '', '', '', '', '');
  }

  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      console.log('hola');
      this._router.navigate(['/main']);
    }
  }

  onSubmit(form) {
    this._authService.login(this.usuario).subscribe(
      () => {
        console.log('sesion iniciada...');
        this._router.navigate(['/main']);
      },
      (err) => {
        switch (err.status) {
          case 401:
            this.mensaje = 'Nombre de usuario o contraña invalido';
            break;
          case 500:  
            this.mensaje = 'Error interno, intente mas tarde';
            break;
          default:
            break;
        }
        this.color = 'bg-red-600';
        this.error = true;
        form.reset()
      }
    );
  }

  onCerrar(bandera) {
    this.error = bandera;
  }
}
