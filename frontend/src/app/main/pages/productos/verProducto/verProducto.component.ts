import { Component } from '@angular/core';

@Component({
  selector: 'ver-producto',
  templateUrl:'./verProducto.component.html'
})
export class VerProducto {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
