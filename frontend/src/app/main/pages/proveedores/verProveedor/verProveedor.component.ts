import { Input, Component } from '@angular/core';

@Component({
  selector: 'ver-proveedor',
  templateUrl:'./verProveedor.component.html'
})
export class VerProveedor {
	@Input() proveedor:any;	
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
