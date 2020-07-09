import { Component } from '@angular/core';

@Component({
  selector: 'modificar-proveedor',
  templateUrl:'./modificarProveedor.component.html'
})
export class ModificarProveedor {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
