import { Component } from '@angular/core';

@Component({
  selector: 'agregar-proveedor',
  templateUrl:'./agregarProveedor.component.html'
})
export class AgregarProveedor {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
