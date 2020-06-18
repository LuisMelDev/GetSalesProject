import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
//paginas de el modulo
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [
  {
    path: 'clientes', 
    component: PrincipalComponent,
    children: [
      {path: '', component:ListarComponent},
      {path: 'listado', component:ListarComponent},
      {path: 'agregar', component:AgregarComponent},
      {path: 'actualizar/:id', component:ActualizarComponent},
      {path: 'busqueda', component:BusquedaComponent},
      {path: 'cliente/:id', component:ClienteComponent}      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
