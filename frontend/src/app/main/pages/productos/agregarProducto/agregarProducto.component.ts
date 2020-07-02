import { Component } from '@angular/core';

@Component({
  selector: 'agregar-producto',
  templateUrl:'./agregarProducto.component.html'
})
export class AgregarProducto {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
