import { Component, OnInit } from '@angular/core';
import { VentasService } from "src/app/services/ventas.service";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { PrecioDolarService } from 'src/app/services/precioDolar.service';

@Component({
  selector: 'app-consultar-venta',
  templateUrl: './consultar-venta.component.html',
  providers:[VentasService,PrecioDolarService]
})
export class ConsultarVentaComponent implements OnInit {
  public ventas:any[] = [];
  public page: number = 1;
  public totalPages:number;
  public limit: number = 10;
  public error = false;
  public formBusqueda: FormGroup;
  public precioDolar = 0;

  constructor(
    private _ventasService:VentasService,
    private fb:FormBuilder,
    private _precioDolarService:PrecioDolarService
  ) { 
    this.precioDolar = parseFloat(this._precioDolarService.precio());
  }

  ngOnInit(): void {
    this.traerVentas()
    this.formBusqueda =this.fb.group({
      parametro: ['cedula'],
      valorParametro: ['',[Validators.required]]
    })
   }
 
   traerVentas(){
     this._ventasService.getAll(this.limit, this.page).subscribe(
       (res:any) =>{
         if(res.totalPages && res.results){
           let resultados = res.results;
           this.ventas = resultados.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
           this.totalPages = res.totalPages;
           console.log(this.ventas)
         }
       },
       err=>{
         console.log(err)
         this.error = true;
       }
     )
   }
 
   paginaSiguiente(){
     this.page++;
      this.traerVentas()
   }
   paginaAnterior(){
     this.page--;
     this.traerVentas()
   }
 
 
 
   busqueda(){
     if(this.formBusqueda.invalid) this.traerVentas();
     let {parametro, valorParametro} = this.formBusqueda.value;
     this._ventasService.search(parametro, valorParametro).subscribe(
       (res:any)=>{
         this.ventas = res
         this.totalPages = 0;
       },
       err=>{
         console.log(err)
       }
     )
   }

}
