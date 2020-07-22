import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { ProductoService } from 'src/app/services/producto.service';
import { VentasService } from 'src/app/services/ventas.service';
import { CompraService } from 'src/app/services/compra.service';
import { PrecioDolarService } from 'src/app/services/precioDolar.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  public precioDolar = 0;
  public usuarios = [];
  public productos = [];
  public form:FormGroup;
  public compras = []
  public ventas = []
  public nada = false;
  // public meses = [
  //   {id:1,mes:'Enero'},
  //   {id:2,mes:'Febrero'},
  //   {id:3,mes:'Marzo'},
  //   {id:4,mes:'Abril'},
  //   {id:5,mes:'Mayo'},
  //   {id:6,mes:'Junio'},
  //   {id:7,mes:'Julio'},
  //   {id:8,mes:'Agosto'},
  //   {id:9,mes:'Septiembre'},
  //   {id:10,mes:'Octubre'},
  //   {id:11,mes:'Noviembre'},
  //   {id:12,mes:'Diciembre'}
  //  ];
  //  public dias = [];


  constructor(
    private _ventasService: VentasService,
    private _comprasService: CompraService,
    private _dolarService: PrecioDolarService,
    private fb :FormBuilder
  ) {
    this.form =  this.fb.group({
      busqueda: ['',Validators.required],
      valorUsuario: ['',Validators.required],
      valorProducto: ['',Validators.required]
    })
    this.precioDolar = parseFloat(this._dolarService.precio());

    // for (let i = 1; i < 32; i++) {
    //   this.dias.push(i);      
    // }
   }

  ngOnInit(): void {
   
  }

  consultar(){
    this.compras = []
    this.ventas = []
    let {busqueda} = this.form.value;
    this.nada= false;
    if(busqueda == '') return;
    // console.log(busqueda)
    switch(busqueda){
        case 'ventas':
          this.traerVentas();break;
        case 'compras':
          this.traerCompras();break;
        case 'ventaDia':
          this.ventasDia();break;
        case 'compraDia':
          this.comprasDia();break;
        case 'ventaMes':
          this.ventasMes();break;
        case 'compraMes':
          this.comprasMes();break;
        case 'ventaYear':
          this.traerVentas();break;
        case 'compraYear':
          this.traerCompras();break;
    }
  }

  traerCompras(){
    this._comprasService.getAll(1000,1).subscribe(
      (res:any)=>{
        if(res.results.length == 0) this.nada = true;
        let resultados = res.results;
           this.compras = resultados.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
        
        // console.log(res)
      },
      err=>{
        console.log(err)
      }
    )  
  }

  traerVentas(){
    this._ventasService.getAll(1000,1).subscribe(
      (res:any)=>{
        if(res.results.length == 0) this.nada = true;
        let resultados = res.results;
           this.ventas = resultados.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
        // this.ventas = resultados
        // console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

  comprasDia(){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let year = fecha.getFullYear();
    // console.log(`${dia} ${mes} ${year}`);
    this._comprasService.getByFecha(year,mes,dia).subscribe(
      (res:any)=>{
        if(res.length == 0) this.nada = true;
        
           this.compras = res.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
      }
    )
  }
  ventasDia(){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let year = fecha.getFullYear();
    // console.log(`${dia} ${mes} ${year}`);
    this._ventasService.getByFecha(year,mes,dia).subscribe(
      (res:any)=>{
        if(res.length == 0) this.nada = true;
        
           this.ventas = res.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
      }
    )
  }

  comprasMes(){
    let fecha = new Date();
    let mes = fecha.getMonth()+1;
    let year = fecha.getFullYear();
    // console.log(`${dia} ${mes} ${year}`);
    this._comprasService.getByFecha(year,mes).subscribe(
      (res:any)=>{
        if(res.length == 0) this.nada = true;
        
           this.compras = res.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
      }
    )
  }
  ventasMes(){
    let fecha = new Date();
    let mes = fecha.getMonth()+1;
    let year = fecha.getFullYear();
    // console.log(`${dia} ${mes} ${year}`);
    this._ventasService.getByFecha(year,mes).subscribe(
      (res:any)=>{
        if(res.length == 0) this.nada = true;
        
           this.ventas = res.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
      }
    )
  }

  comprasYear(){
    let fecha = new Date();
    let year = fecha.getFullYear();
    // console.log(`${dia} ${mes} ${year}`);
    this._comprasService.getByFecha(year).subscribe(
      (res:any)=>{
        if(res.length == 0) this.nada = true;
        
           this.compras = res.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
      }
    )
  }
  ventasYear(){
    let fecha = new Date();
    let year = fecha.getFullYear();
    // console.log(`${dia} ${mes} ${year}`);
    this._ventasService.getByFecha(year).subscribe(
      (res:any)=>{
        if(res.length == 0) this.nada = true;
        
           this.ventas = res.map(e => {
             let precioTotal = 0;
             e.detalles.forEach(element => {
               precioTotal += parseInt(element.cantidad_producto) * parseFloat(element.precio_producto)
             });
             e.total = precioTotal;
             return e;
           })
      }
    )
  }
}
