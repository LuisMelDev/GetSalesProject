import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, AdministracionRoutingModule],
  exports: [PrincipalComponent],
})
export class AdministracionModule {}
