import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [PrincipalComponent]
})
export class ProductosModule { }
