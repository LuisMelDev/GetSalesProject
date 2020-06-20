import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [UsuarioService],
})
export class ListarComponent implements OnInit {
  public indice: number = 1;
  public usuarios: any;
  public error: boolean = false;
  public titulo: string = 'Listado de Clientes';
  public icono: string = 'fa fa-home';
  public busqueda: string;

  constructor(public _userService: UsuarioService) {
    this.usuarios = [];
    this.busqueda = '';
  }

  ngOnInit(): void {
    this._userService.getAll(this.indice).subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  next(){
    
      this.indice++;
    
      this._userService.getAll(this.indice).subscribe(
      (res) => {
        
        this.usuarios = res;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  previus(){
    if(this.indice > 1){
      this.indice--;
    }else{
      this.indice = 1
    }
    this._userService.getAll(this.indice).subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => {
        this.error = true;
      }
      );
  }

  buscar() {
    this._userService.search(this.busqueda).subscribe(
      (res) => {
        this.usuarios = res
      },
      (err) => {
        this.error = true
      }
    );
  }
}
