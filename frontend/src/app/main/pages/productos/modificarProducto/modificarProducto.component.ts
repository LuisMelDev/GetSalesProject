import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { MarcaService } from '../../../../services/marca.service';
import { GrupoService } from '../../../../services/grupo.service';
import { AmperajeService } from '../../../../services/amperaje.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'modificar-producto',
  templateUrl:'./modificarProducto.component.html'
})
export class ModificarProducto implements OnInit {
  @Output() actualizado: EventEmitter<any> = new EventEmitter();
  @Input() producto:any = {};
  
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
    this.formProductos = this.fb.group({
      nombre:[this.producto.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      amperaje_id: [this.producto.amperaje_id,Validators.required],
      grupo_id: [this.producto.grupo_id,Validators.required],
      marca_id: [this.producto.marca_id,Validators.required]
    })
  }

  toggleModal() {
    if(this.showModal) this.actualizado.emit(true);
    this.showModal = !this.showModal;
  }

  enviar(){
    const { nombre } = this.formProductos.controls;
    this.error = '';
    // console.log(this.formProductos)
    if(nombre.hasError('maxlength') || nombre.hasError('minlength')){
      this.error = 'El codigo de producto no debe ser menos a 5 caracteres ni mayor a 10 caracteres';
      return;
    }
    this._productoService.update(this.formProductos.value,this.producto.id).subscribe(
      res=>{
        this.mensaje = 'El producto ha sido actualizado satisfactoriamente';
        this.color = 'bg-green-500';
        this.alerta = true;
        
      
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
