import { Component } from '@angular/core';

@Component({
  selector: 'agregar-usuario',
  templateUrl:'./agregarUsuario.component.html'
})
export class AgregarUsuario {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
