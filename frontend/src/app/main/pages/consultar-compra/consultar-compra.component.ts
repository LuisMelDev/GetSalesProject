import { Component, OnInit } from '@angular/core';
import { CompraService } from "src/app/services/compra.service";
import { PrecioDolarService } from "src/app/services/precioDolar.service";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-consultar-compra',
  templateUrl: './consultar-compra.component.html',
  providers:[CompraService,PrecioDolarService]
})
export class ConsultarCompraComponent implements OnInit {

  public compras:any[] = [];
  public page: number = 1;
  public totalPages:number;
  public limit: number = 10;
  public error = false;
  public formBusqueda: FormGroup;
  public precioDolar = 0;

  constructor(
    private _comprasService:CompraService,
    private fb:FormBuilder,
    private _precioDolarService:PrecioDolarService
  ) { 
    this.precioDolar = parseFloat(this._precioDolarService.precio());
  }

  ngOnInit(): void {
    this.traercompras()
    this.formBusqueda =this.fb.group({
      parametro: ['cedula'],
      valorParametro: ['',[Validators.required]]
    })
   }
 
   traercompras(){
     this._comprasService.getAll(this.limit, this.page).subscribe(
       (res:any) =>{
         if(res.totalPages && res.results){
           let resultados = res.results;
           this.compras = resultados.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
           this.totalPages = res.totalPages;
          //  console.log(this.compras)
          }
          // console.log(res)
       },
       err=>{
         console.log(err)
         this.error = true;
       }
     )
   }
 
   paginaSiguiente(){
     this.page++;
      this.traercompras()
   }
   paginaAnterior(){
     this.page--;
     this.traercompras()
   }
 
   busqueda(){
     if(this.formBusqueda.invalid) this.traercompras();
     let {parametro, valorParametro} = this.formBusqueda.value;
     this._comprasService.search(parametro, valorParametro).subscribe(
       (res:any)=>{
         this.compras = res
         this.totalPages = 0;
       },
       err=>{
         console.log(err)
       }
     )
   }

}
