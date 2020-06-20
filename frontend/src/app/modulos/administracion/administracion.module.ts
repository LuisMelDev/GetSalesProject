import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulo componentes 
import { ComponentsModule } from 'src/app/components/components.module';


import { AdministracionRoutingModule } from './administracion-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ReportesComponent,
    BitacoraComponent
  ],
  imports: [CommonModule, AdministracionRoutingModule, ComponentsModule],
  exports: [
    PrincipalComponent,
    ReportesComponent,
    BitacoraComponent,
  ],
})
export class AdministracionModule {}
