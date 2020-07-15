import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientesService } from "src/app/services/clientes.service";
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'elegir-cliente',
  templateUrl: './elegirCliente.component.html',
  
})
export class ElegirCliente implements OnInit {
  @Output() cliente:EventEmitter<any> = new EventEmitter<any>()

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  public clientes:any[];
  public page: number = 1;
  public totalPages:number;
  public limit: number = 10;
  public error = false;
  public formBusqueda: FormGroup;


  constructor(
    private _clienteService:ClientesService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
   this.traerClientes()
   this.formBusqueda =this.fb.group({
     parametro: ['cedula'],
     valorParametro: ['',[Validators.required]]
   })
  }

  traerClientes(){
    this._clienteService.getAll(this.limit, this.page).subscribe(
      res =>{
        if(res.totalPages && res.results){
          this.clientes = res.results;
          this.totalPages = res.totalPages;
          // console.log(res)
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
     this.traerClientes()
  }
  paginaAnterior(){
    this.page--;
    this.traerClientes()
  }



  busqueda(){
    if(this.formBusqueda.invalid) this.traerClientes();
    let {parametro, valorParametro} = this.formBusqueda.value;
    this._clienteService.search(parametro, valorParametro).subscribe(
      (res:any)=>{
        this.clientes = res
        this.totalPages = 0;
      },
      err=>{
        console.log(err)
      }
    )
  }

  elegir(cliente){
    this.cliente.emit(cliente);
    this.showModal = false;
  }
}