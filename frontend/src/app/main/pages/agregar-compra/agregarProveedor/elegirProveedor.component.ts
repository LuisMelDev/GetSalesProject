import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProveedoresService } from "src/app/services/proveedores.service";
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'elegir-proveedor',
  templateUrl: './elegirProveedor.component.html',
  
})
export class ElegirProveedor implements OnInit {
  @Output() proveedor:EventEmitter<any> = new EventEmitter<any>()

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  public proveedores:any[];
  public page:number;
  public totalpages:number;
  public limit:number;
  public error:boolean;
  public formBusqueda:FormGroup;

constructor(
    private _proveedorService:ProveedoresService,
  private fb:FormBuilder
) 

{

    this.page = 1;
    this.limit = 10;
    this.error = false;


 }

ngOnInit(): void {
  this.getProveedores();
  this.formBusqueda =this.fb.group({
    parametro: ['rif'],
    valorParametro: ['',[Validators.required]]
  })
}

getProveedores(){

    this._proveedorService.getAll(this.limit, this.page).subscribe(
    res => {
      if(res.totalPages && res.results){
        this.proveedores = res.results;
        this.totalpages = res.totalPages;
        // console.log(res)
      }
    },
    err =>{
        this.error = true;
        console.log(err);
    }
  )
}

nextPage(){
  this.page++;
  this.getProveedores();
}

previewPage(){
  this.page--;
  this.getProveedores();
}

search(){
  if(this.formBusqueda.invalid) this.getProveedores();
  let {parametro, valorParametro} = this.formBusqueda.value;
  this._proveedorService.search(parametro,valorParametro).subscribe(
    (res:any)=>{
      this.proveedores = res
      this.totalpages = 0;
    },
    err=>{
      console.log(err)
    }
  )
}

  elegir(proveedor){
    this.proveedor.emit(proveedor);
    this.showModal = false;
  }
}