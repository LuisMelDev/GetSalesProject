import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from "src/app/models/cliente.model";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers:[ClienteService]
})
export class RegistrarComponent implements OnInit {
  public fecha: any;
  public resultados: any;
  public cliente:Cliente;
  public persona: any;
  public mostrar1:boolean = false;
  public mostrar2:boolean = false;
  

  constructor(private _clienteService: ClienteService) {
    this.fecha = '18/06/2020';
    this.cliente = new Cliente('','','','','','','')
    this.persona = {
      cedula:'',
      nombre: ''
    }
  }

  ngOnInit(): void {}

  buscarCliente() {
    console.log(this.cliente.cedula.length)
    if(this.cliente.cedula.length != 0){
      this._clienteService.searchWithCedula(this.cliente.cedula).subscribe(
        (res) => {
          console.log(res)
          this.resultados = res
        },
        (err) => {
          console.log(err)
        }
      );
    }else{
      this.resultados = ''
    }
  }

  addCliente(entidad){
    console.log(entidad)
    this.persona = entidad
  }

  mostrarModal(numero){
    numero == 1 ? this.mostrar1 = true : this.mostrar2 = true
  }
  
  esconderModal(numero){

    numero == 1 ? this.mostrar1 = false : this.mostrar2 = false
  }
}
