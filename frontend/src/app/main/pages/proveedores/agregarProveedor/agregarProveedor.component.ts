import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../../services/proveedores.service';
import { Proveedor } from '../../../../models/proveedor.model';

@Component({
  selector: 'agregar-proveedor',
  templateUrl:'./agregarProveedor.component.html',
  providers: [ProveedoresService]
})
export class AgregarProveedor {

	@Output() registred = new EventEmitter<boolean>()

	  showModal = false;
	  public proveedor: Proveedor;
	  public alert: boolean; 
	  public message:string;
	  public color:string ;
	  public invalidDate: boolean; 
	  public clasesInput =
	    'w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 box-border p-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4';
	  public fg: FormGroup;
	  public errors: string;
  	

constructor(
    private _proveedorService: ProveedoresService,
    private fb: FormBuilder
  ) 

{
  	this.alert = false;
  	this.invalidDate = false;
  	this.errors = "";
    this.fg = this.fb.group({
      rif: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[V|J]+([0-9])*$/),
          Validators.maxLength(9),
        ],
      ],
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
          Validators.maxLength(100),
        ],
      ]
    });
    this.proveedor = new Proveedor('', '', '');
  }

  

  toggleModal() {
    this.showModal = !this.showModal;
  }


  send() {
    this.errors = '';
    if (this.fg.status === 'INVALID') {
      const {
        rif,
        nombre
      } = this.fg.controls;

      if (
        rif.hasError('required') ||
        nombre.hasError('required') 
      ) 
      {
        this.errors = 'Todos los campos son requeridos';
      } else if (rif.errors) {
        if(rif.hasError('pattern')){
          this.errors = 'Llenar los datos del RIF con la salvedad de colocar “V” si se es Persona Natural o “J” si es Persona Jurídica'
        }
        if(rif.hasError('maxlength')){
          this.errors = 'El campo RIF no debe tener mas de 9 numeros'
        }
      } else if (nombre.errors) {
        if(nombre.hasError('pattern')){
          this.errors = 'El campo nombre solo admite caracteres'
        }
        if(nombre.hasError('maxlength')){
          this.errors = 'El campo nombre no debe tener mas de 100 caracteres'
        } 
      }

      return;
    }

    this._proveedorService.create(this.fg.value).subscribe(
      (res:any)=>{
        this.showAlert(`El proveedor ${res.nombre} ha sido registrado`,'bg-green-400')
        this.fg.reset()
        this.registred.emit(true);
      },
      err =>{
        this.showAlert(err.error.message,'bg-red-600')
        console.log(err)
      }
    )
 }


  showAlert(message, color){
    this.alert = true;
    this.color = color;
    this.message=message;

    setTimeout(()=>{
      this.alert = false
      console.log(1)
    }, 10000)
  }

  closeAlert(e){
    this.alert = e;
  }
}
