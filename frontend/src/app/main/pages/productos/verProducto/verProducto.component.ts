import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ver-producto',
  templateUrl:'./verProducto.component.html'
})
export class VerProducto implements OnInit {
  @Input() producto :any = {};

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }

  ngOnInit(){
    console.log(this.producto)
  }
}
