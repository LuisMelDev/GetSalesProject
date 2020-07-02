import { Component } from '@angular/core';

@Component({
  selector: 'ver-cliente',
  templateUrl:'./verCliente.component.html'
})
export class VerCliente {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
