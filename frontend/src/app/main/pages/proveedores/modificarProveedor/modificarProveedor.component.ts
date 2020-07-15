import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../../services/proveedores.service';
import { Proveedor } from '../../../../models/proveedor.model';
import { Component, Output,Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'modificar-proveedor',
  templateUrl:'./modificarProveedor.component.html'
})
export class ModificarProveedor implements OnInit {
  @Output() updated = new EventEmitter<boolean>();
  @Input() proveedor: Proveedor;
  showModal = false;
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
    this.proveedor = new Proveedor('', '', '');
  }


  ngOnInit(){

    this.fg = this.fb.group({
      rif: [
        this.proveedor.rif,
        [
          Validators.required,
          Validators.pattern(/^[V|J]+([0-9])*$/),
          Validators.maxLength(9),
        ],
      ],
      nombre: [
        this.proveedor.nombre,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
          Validators.maxLength(100),
        ],
      ]
	
   })
}
  

  toggleModal() {
    if(this.showModal === true) this.updated.emit(true);
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
          this.errors = 'El campo cedula no debe tener mas de 8 numeros'
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

    this._proveedorService.update(this.fg.value, this.proveedor.id).subscribe(
      (res:any)=>{
        this.fg.reset();
        this.showAlert(`El cliente ha sido actualizado`,'bg-green-400');
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
