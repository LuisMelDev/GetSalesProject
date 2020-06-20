import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { VerComponent } from './pages/ver/ver.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    AgregarComponent,
    ConsultarComponent,
    VerComponent,
  ],
  imports: [CommonModule, ComprasRoutingModule, ComponentsModule, FormsModule],
  exports: [
    PrincipalComponent,
    AgregarComponent,
    ConsultarComponent,
    VerComponent,
  ],
})
export class ComprasModule {}
