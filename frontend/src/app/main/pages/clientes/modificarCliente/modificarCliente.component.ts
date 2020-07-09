import { Component, Output, Input,EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientesService } from "../../../../services/clientes.service";
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'modificar-cliente',
  templateUrl:'./modificarCliente.component.html'
})
export class ModificarCliente implements OnInit{
  @Output() actualizado = new EventEmitter<boolean>();
  @Input() cliente: Cliente;

  showModal = false;
  
  public alerta: boolean = false;
  public mensaje:string;
  public color:string ;
  public clasesInput =
    'w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 box-border p-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4';
  public clienteForm: FormGroup;
  public errors: string = '';

  constructor(
    private _clienteService: ClientesService,
    private fb: FormBuilder
  ) {
    
  }

  ngOnInit(){
    let date = new Date(this.cliente.fecha_nacimiento);
    let dia = date.getDate();
    let fecha = `${date.getFullYear()}-${date.getMonth()+1}-${(dia < 10 && dia >0) ? `0${dia}` : dia}`
    // console.log(fecha)
    this.clienteForm = this.fb.group({
      cedula: [
        this.cliente.cedula,
        [
          Validators.required,
          Validators.pattern(/^([0-9])*$/),
          Validators.maxLength(8),
        ],
      ],
      nombre: [
        this.cliente.nombre,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
          Validators.maxLength(100),
        ],
      ],
      fecha_nacimiento: [fecha, [Validators.required]],
      telefono: [this.cliente.telefono, [Validators.required,Validators.pattern(/^([0-9])*$/),Validators.maxLength(11)]],
      email: [this.cliente.email, [Validators.required, Validators.email]],
      direccion: [this.cliente.direccion, [Validators.required, Validators.maxLength(200)]],
    });
  }
  toggleModal() {
    if(this.showModal === true) this.actualizado.emit(true);
    this.showModal = !this.showModal;
  }

  enviar() {
    this.errors = '';
    if (this.clienteForm.status === 'INVALID') {
      const {
        cedula,
        nombre,
        fecha_nacimiento,
        telefono,
        email,
        direccion,
      } = this.clienteForm.controls;

      console.log(this.clienteForm);
      if (
        cedula.hasError('required') ||
        nombre.hasError('required') ||
        fecha_nacimiento.hasError('required') ||
        telefono.hasError('required') ||
        email.hasError('required') ||
        direccion.hasError('required')
      ) {
        this.errors = 'Todos los campos son requeridos';
      } else if (cedula.errors) {
        if(cedula.hasError('pattern')){
          this.errors = 'El campo cedula solo admite numeros'
        }
        if(cedula.hasError('maxlength')){
          this.errors = 'El campo cedula no debe tener mas de 8 numeros'
        }
      } else if (nombre.errors) {
        if(nombre.hasError('pattern')){
          this.errors = 'El campo nombre solo admite caracteres'
        }
        if(nombre.hasError('maxlength')){
          this.errors = 'El campo nombre no debe tener mas de 100 caracteres'
        }
      } else if (telefono.errors) {
        if(telefono.hasError('pattern')){
          this.errors = 'El campo telefono solo admite numeros'
        }
        if(telefono.hasError('maxlength')){
          this.errors = 'El campo telefono no debe tener mas de 11 numeros'
        }
      } else if (email.errors) {
        if(email.hasError('email')){
          this.errors = 'Introduzca un correo valido'
        }
      } else if (direccion.errors) {
        if(telefono.hasError('maxlength')){
          this.errors = 'El campo dirrecion no debe tener mas de 200 caracteres'
        }
      }
      return;
    }
    this._clienteService.update(this.clienteForm.value, this.cliente.id).subscribe(
      (res:any)=>{
        console.log(res)
        this.mostrarAlerta(`El cliente ha sido actualizado`,'bg-green-400')
      },
      err =>{
        this.mostrarAlerta(`ha ocurrio un error al registrar cliente`,'bg-red-600')
        console.log(err)
      }
    )
  }
  mostrarAlerta(mensaje, color){
    this.alerta = true;
    this.color = color;
    this.mensaje=mensaje;

    setTimeout(()=>{
      this.alerta = false
      console.log(1)
    }, 10000)
  }

  cerrarAlerta(e){
    this.alerta = e;
  }
}
