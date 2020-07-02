import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

const routes: Routes = [
  { 
    path: 'main', 
    component: MainComponent, 
    children: [
      {path:'', component:DashboardComponent},
      {path:'principal', component:DashboardComponent},
      {path:'clientes', component: ClientesComponent},
      {path:'productos', component: ProductosComponent},
      {path:'usuarios', component: UsuariosComponent},
      {path:'proveedores', component: ProveedoresComponent},
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
