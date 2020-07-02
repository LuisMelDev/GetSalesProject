import { Component } from '@angular/core';

@Component({
  selector: 'ver-usuario',
  templateUrl:'./verUsuario.component.html'
})
export class VerUsuario {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
