import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module'; //modulo de componentes

import { ProductosRoutingModule } from './productos-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarComponent,
    ProductoComponent,
  ],
  imports: [CommonModule, ProductosRoutingModule, ComponentsModule],
  exports: [
    PrincipalComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarComponent,
    ProductoComponent,
  ],
})
export class ProductosModule {}
