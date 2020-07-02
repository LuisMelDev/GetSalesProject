import { Component } from '@angular/core';

@Component({
  selector: 'ver-proveedor',
  templateUrl:'./verProveedor.component.html'
})
export class VerProveedor {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
