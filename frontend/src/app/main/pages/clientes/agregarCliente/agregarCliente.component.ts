import { Component, Output,EventEmitter } from '@angular/core';
import { ClientesService } from '../../../../services/clientes.service';
import { Cliente } from '../../../../models/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'agregar-cliente',
  templateUrl: './agregarCliente.component.html',
  providers: [ClientesService],
})
export class AgregarCliente {

  @Output() registrado = new EventEmitter<boolean>()

  showModal = false;
  public cliente: Cliente;
  public alerta: boolean = false;
  public mensaje:string;
  public color:string ;
  public fechaInvalida: boolean = false;
  public clasesInput =
    'w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 box-border p-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4';
  public clienteForm: FormGroup;
  public errors: string = '';

  constructor(
    private _clienteService: ClientesService,
    private fb: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      cedula: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([0-9])*$/),
          Validators.maxLength(8),
        ],
      ],
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
          Validators.maxLength(100),
        ],
      ],
      fecha_nacimiento: ['', [Validators.required]],
      telefono: ['', [Validators.required,Validators.pattern(/^([0-9])*$/),Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.maxLength(200)]],
    });
    this.cliente = new Cliente('', '', '', '', '', '', '');
  }

  toggleModal() {
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
    this._clienteService.create(this.clienteForm.value).subscribe(
      (res:any)=>{
        this.mostrarAlerta(`El cliente ${res.nombre} ha sido registrado`,'bg-green-400')
        this.clienteForm.reset()
        this.registrado.emit(true);
      },
      err =>{
        this.mostrarAlerta(err.error.message,'bg-red-600')
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
