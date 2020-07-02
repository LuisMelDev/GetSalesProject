import { Component } from '@angular/core';

@Component({
  selector: 'agregar-cliente',
  templateUrl:'./agregarCliente.component.html'
})
export class AgregarCliente {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
