import { Component, Input } from '@angular/core';

@Component({
  selector: 'ver-usuario',
  templateUrl:'./verUsuario.component.html'
})
export class VerUsuario {
  @Input() usuario:any = {}
  showModal = false;
  toggleModal() { 
    this.showModal = !this.showModal;
  }
}
 