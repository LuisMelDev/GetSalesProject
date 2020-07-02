import { Component } from '@angular/core';

@Component({
  selector: 'modificar-producto',
  templateUrl:'./modificarProducto.component.html'
})
export class ModificarProducto {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
