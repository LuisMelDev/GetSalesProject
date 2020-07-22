import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html'
})
export class PanelUsuarioComponent implements OnInit {
  public usuario;
  public formUsuario:FormGroup
  public formPass:FormGroup
  public mensaje= '';
  public mensaje2= '';
  public error= '';
  public error2= '';
  public color = '';
  public color2 = '';

  constructor(
    private _authService: AuthService,
    private _usuarioService:UsuariosService,
    private fb:FormBuilder,
    private _router: Router
  ) {
    this.usuario = this._authService.getIdentity();
    this.formUsuario = this.fb.group({
      nombre:['', [Validators.required, Validators.maxLength(50)]],
      email:['', [Validators.required, Validators.email]],
    })
    this.formPass = this.fb.group({
      password:['', [Validators.required,Validators.minLength(8), Validators.maxLength(12)]],
      password2:['', [Validators.required,Validators.minLength(8), Validators.maxLength(12)]],
    })
   }

  ngOnInit(): void {
  }

  enviar(){
    this.mensaje = '';
    let { nombre, email } = this.formUsuario.controls;

    if(nombre.hasError('required') && email.hasError('required')){
      this.mensaje = 'debe rellenar al menos un campo';
      return;
    }else if(email.hasError('email')){
      this.mensaje = 'ingrese un correo valido';
      return;
    }else if(nombre.hasError('maxlength')){
      this.mensaje = 'el nombre no debe tener mas de 50 caracteres';
      return;
    }
    let model = {};
    let valorNombre = this.formUsuario.value.nombre;
    let valorEmail  = this.formUsuario.value.email;

    if(valorNombre.length != 0){
      model = {...model, nombre:valorNombre}
    }
    if(valorEmail.length != 0){
      model = {...model, email:valorEmail}
    }

    this._usuarioService.update(model,this.usuario.id).subscribe(
      res=>{
        // let usuario = JSON.stringify(res);
        // localStorage.setItem('user',usuario)
        this.error = 'Ha sido actualizado satisfactoriamente, se cerrara sesion...'  ;
        this.color = 'bg-green-500';

        setTimeout(()=>{
          this.error = ''
          this._authService.logout().subscribe(res=>{
            this._router.navigate(['/login'])
          });
        }, 5000)
    },
      err=>{
        this.error = 'no se ha podido actualizar';
        this.color = 'bg-red-600'
        setTimeout(()=>{
          this.error = ''
        }, 5000)
    })
  }
  enviar2(){ 
    this.mensaje2 = '';
    let { password, password2 } = this.formPass.controls;

    if(password.hasError('required') || password2.hasError('required')){
      this.mensaje2 = 'Todos los campos son obligatorios';
      return;
    }else if(password.hasError('maxlength') ||password.hasError('minlength') ){
      this.mensaje2 = 'La contraseña debe tener entre 8 y 12 caracteres';
      return;
    }else if(password.value != password2.value){
      this.mensaje2 = 'Las contraseñas debe ser iguales';
      return;
    }
  

    this._usuarioService.update({password:password.value},this.usuario.id).subscribe(
      res=>{
        // let usuario = JSON.stringify(res);
        // localStorage.setItem('user',usuario)
        this.error2 = 'Ha sido actualizado satisfactoriamente, se cerrara sesion...'  ;
        this.color2 = 'bg-green-500';

        setTimeout(()=>{
          this.error2 = ''
          this._authService.logout().subscribe(res=>{
            this._router.navigate(['/login'])
          });
          
        }, 5000)
    },
      err=>{
        this.error2 = 'no se ha podido actualizar';
        this.color2 = 'bg-red-600'
        setTimeout(()=>{
          this.error2 = ''
        }, 5000)
    })
  }
}
