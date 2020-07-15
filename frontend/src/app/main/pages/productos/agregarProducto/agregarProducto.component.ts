import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { MarcaService } from '../../../../services/marca.service';
import { GrupoService } from '../../../../services/grupo.service';
import { AmperajeService } from '../../../../services/amperaje.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'agregar-producto',
  templateUrl:'./agregarProducto.component.html'
})
export class AgregarProducto implements OnInit {
  @Output() registrado: EventEmitter<any> = new EventEmitter()
  
  public formProductos: FormGroup
  public marcas: any[];
  public grupos: any[];
  public amperajes: any[];
  public showModal = false;
  public error = '';
  public alerta = false;
  public mensaje = '';
  public color = '';



  constructor(
    private _productoService :ProductoService,
    private _marcaService :MarcaService,
    private _amperajeService :AmperajeService,
    private _grupoService :GrupoService,
    private fb:FormBuilder
  ){
    this.formProductos = this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      amperaje_id: ['',Validators.required],
      grupo_id: ['',Validators.required],
      marca_id: ['',Validators.required]
    })
  }

  ngOnInit(){
    this._marcaService.getAll().subscribe(
      (res:any)=>{
        this.marcas = res.results
      }
    )
    this._amperajeService.getAll().subscribe(
      (res:any)=>{
        this.amperajes = res.results
      }
    )
    this._grupoService.getAll().subscribe(
      (res:any)=>{
        this.grupos = res.results
      }
    )
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  enviar(){
    this.error = '';
    const { nombre } = this.formProductos.controls;
    // console.log(this.formProductos)
    if(this.formProductos.invalid){
      this.error = 'Todos los campos son obligatorios';
      return;
    } else if(nombre.hasError('maxlength') || nombre.hasError('minlength')){
      this.error = 'El codigo de producto no debe ser menos a 5 caracteres ni mayor a 10 caracteres';
      return;
    }
    this._productoService.create(this.formProductos.value).subscribe(
      res=>{
        this.mensaje = 'El producto ha sido registrado satisfactoriamente';
        this.color = 'bg-green-500';
        this.alerta = true
        this.registrado.emit(true)
        this.formProductos.reset()

        setTimeout( ()=>{
          this.alerta = false; 
        }, 10000 )
      }, 
      (err:any)=>{
        this.mensaje = 'El producto no se pudo registrar'+err.message;
        this.color = 'bg-red-600';
        this.alerta = true;
        console.log(err)

        setTimeout( ()=>{
          this.alerta = false; 
        },10000 )
      }
    )
  }

  cerrarAlerta(){
    this.alerta = false; 
  }
}
