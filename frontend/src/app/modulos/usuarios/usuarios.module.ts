import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarComponent,
    UsuarioComponent,
  ],
  imports: [CommonModule, UsuariosRoutingModule,ComponentsModule, FormsModule],
  exports:[
    PrincipalComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarComponent,
    UsuarioComponent,
  ]
})
export class UsuariosModule {}
