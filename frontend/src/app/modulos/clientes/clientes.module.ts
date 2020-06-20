import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
//modulo de componentes
import { ComponentsModule } from 'src/app/components/components.module';
//paginas de el modulo
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarComponent,
    ClienteComponent,
    BusquedaComponent,
  ],
  imports: [CommonModule, ClientesRoutingModule, ComponentsModule, FormsModule],
  exports: [
    PrincipalComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarComponent,
    ClienteComponent,
    BusquedaComponent,
  ],
})
export class ClientesModule {}
