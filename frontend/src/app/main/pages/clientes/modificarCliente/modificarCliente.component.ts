import { Component } from '@angular/core';

@Component({
  selector: 'modificar-cliente',
  templateUrl:'./modificarCliente.component.html'
})
export class ModificarCliente {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
