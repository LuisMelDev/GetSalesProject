import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() mensaje: string = '';
  @Input() color: string = '';
  @Output() cerrar = new EventEmitter<boolean>();
  
  onCerrar(){
    this.cerrar.emit(false);
  }

}
