import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { VentasRoutingModule } from './ventas-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { VerComponent } from './pages/ver/ver.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    RegistrarComponent,
    ListadoComponent,
    VerComponent,
  ],
  imports: [CommonModule, VentasRoutingModule, ComponentsModule],
  exports: [
    PrincipalComponent,
    RegistrarComponent,
    ListadoComponent,
    VerComponent,
  ],
})
export class VentasModule {}
