import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ],
  exports: [PrincipalComponent]
})
export class VentasModule { }
