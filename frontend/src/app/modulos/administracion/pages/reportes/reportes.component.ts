import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  public titulo:string = "Reportes"
  public icono:string = "fas fa-clipboard-list"
  constructor() { }

  ngOnInit(): void {
  }

  
}
