import { Component } from '@angular/core';

@Component({
  selector: 'modificar-usuario',
  templateUrl:'./modificarUsuario.component.html'
})
export class ModificarUsuario {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
