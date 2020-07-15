import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from "src/app/services/usuarios.service";
import { RolesService } from "src/app/services/roles.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'agregar-usuario',
  templateUrl:'./agregarUsuario.component.html',
  providers:[UsuariosService, RolesService]
})
export class AgregarUsuario implements OnInit {
  @Output() registrado = new EventEmitter();
  public roles = []
  public formUsuario: FormGroup;
  public error = '';
  public alerta = false;
  public mensaje = '';
  public color = '';
  
  showModal = false;

  constructor(
    private _usuarioService:UsuariosService,
    private _rolesService: RolesService,
    private fb : FormBuilder
  ){
    this.formUsuario = this.fb.group({
      nombre:['', [Validators.required, Validators.maxLength(50)]],
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password:['', [Validators.required,Validators.minLength(8), Validators.maxLength(12)]],
      email:['', [Validators.required, Validators.email]],
      rol_id:['', Validators.required]
    })
  }

  ngOnInit(){
    this.traerRoles();
  }

  traerRoles(){
    this._rolesService.getAll().subscribe(
      (res:any)=>{
        // console.log(res)
        this.roles = res.results;
      }
    )
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }

  enviar(){
    this.error = '';
    const {nombre,username,password,email, rol_id  }= this.formUsuario.controls;
    if(nombre.hasError('required') || username.hasError('required') || password.hasError('required') || email.hasError('required') || rol_id.hasError('required')){
      this.error = 'Todos los campos son obligatorios';
      return;
    }else if(username.getError('maxlength') || username.getError('minlength') ){
      this.error = 'EL nombre de usuario debe estar enter 5 y 10 caracteres';
      return;
    }else if(nombre.hasError('maxlength')){
      this.error = 'El nombre no puede tener mas de 50 caracteres';
      return;
    }else if(email.hasError('email')){
      this.error = 'ingrese un correo valido';
      return;
    }else if(password.getError('maxlength') || password.getError('minlength')){
      this.error = 'La contraseña debe tener entre 8 y 12 caracteres';
      return;
    } 
    
    this._usuarioService.create(this.formUsuario.value).subscribe(
      (res:any)=>{
        this.mensaje = `El usuario ${res.nombre} ha sido registrado`;
        this.color = 'bg-green-500';
        this.alerta = true;
        this.formUsuario.reset()
        this.registrado.emit(true)
        setTimeout(()=>{
          this.cerrarAlerta()
        }, 10000)
      },
      (err:any)=>{
        this.mensaje = err.message
        this.color =  'bg-red-600'
        this.alerta = true;
        setTimeout(()=>{
          this.cerrarAlerta()
        }, 10000)  
      }
    )
  }

  cerrarAlerta(){
    this.alerta = false;
  }
}
