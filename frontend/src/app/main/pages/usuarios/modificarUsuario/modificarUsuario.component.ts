import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { UsuariosService } from "src/app/services/usuarios.service";
import { RolesService } from "src/app/services/roles.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'modificar-usuario',
  templateUrl:'./modificarUsuario.component.html',
  providers:[UsuariosService, RolesService]
})
export class ModificarUsuario implements OnInit {
  @Output() actualizado = new EventEmitter();
  @Input() usuario:any = {};

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
    this.formUsuario = this.fb.group({
      nombre:[this.usuario.nombre, [Validators.required, Validators.maxLength(20)]],
      username:[this.usuario.username, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password:['', [Validators.required,Validators.minLength(8), Validators.maxLength(12)]],
      email:[this.usuario.email, [Validators.required, Validators.email]],
      rol_id:[this.usuario.rol_id, Validators.required]
    })
  }
  toggleModal() {
    if(this.showModal) this.actualizado.emit(true)
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
    
    this._usuarioService.update(this.formUsuario.value,this.usuario.id).subscribe(
      (res:any)=>{
        this.mensaje = `El usuario ha sido actualizado`;
        this.color = 'bg-green-500';
        this.alerta = true;
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
