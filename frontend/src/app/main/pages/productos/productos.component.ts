import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { MarcaService } from '../../../services/marca.service';
import { GrupoService } from '../../../services/grupo.service';
import { AmperajeService } from '../../../services/amperaje.service';
import { InventariosService } from '../../../services/inventario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers:[ProductoService, MarcaService, GrupoService, AmperajeService]
})
export class ProductosComponent implements OnInit {
  public formBuscar: FormGroup;
  public productos: any[];
  public limit: any = 10;
  public page: any = 1;
  public totalPages: number;
  public marcas: any[];
  public grupos: any[];
  public amperajes: any[];
  public campos = [];
  

  constructor(
    private _productoService: ProductoService,
    private _marcaService: MarcaService,
    private _amperajeService: AmperajeService,
    private _grupoService: GrupoService,
    private _inventariosService: InventariosService,
    private fb: FormBuilder
  ) {
    this.formBuscar = this.fb.group({
      parametro: ['nombre',Validators.required],
      valorParametro: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.traerProductos();
    this.traerInfoProductos();
  }

  traerProductos() {
    this._inventariosService.getAll(this.limit, this.page).subscribe(
      (res: any) => {
        this.productos = res.results;
        this.totalPages = res.totalPages;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  traerInfoProductos(){
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

  busqueda(){
    if(this.formBuscar.invalid) {
      this.traerProductos()
      return;
  };
    const {parametro, valorParametro  } = this.formBuscar.value;

    this._productoService.search(parametro, valorParametro).subscribe(
      (res:any)=>{
        console.log(res)
        
        this.productos = res.map( e => {
            e.marca = this.marcas.find( el => el.id === e.marca_id);
            e.grupo = this.grupos.find( el => el.id === e.grupo_id);
            e.amperaje = this.amperajes.find( el => el.id === e.amperaje_id);
            return e;
            
        });
        this.totalPages = 0;
      },
      err=>{
        this.productos = [];
        console.log(err)
      }
    )
  }

  paginaSiguiente(){
    this.page++;
     this.traerProductos()
  }
  paginaAnterior(){
    this.page--;
    this.traerProductos()
  }

}
