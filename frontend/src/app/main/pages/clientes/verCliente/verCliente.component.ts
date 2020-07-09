import { Component, Input } from '@angular/core';

@Component({
  selector: 'ver-cliente',
  templateUrl:'./verCliente.component.html'
})
export class VerCliente {
  @Input() cliente:any;

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
