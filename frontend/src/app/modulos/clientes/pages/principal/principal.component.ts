import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public titulo: string = "listado de clientes";
  public icono: string = "fa-home";
 
  constructor(
    ) {
  
     }

  ngOnInit(){
    
  }

}
