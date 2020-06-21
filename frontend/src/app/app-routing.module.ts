import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AgregarUsuariosComponent } from './pages/usuarios/agregar/agregar.component';
import { AgregarClientesComponent } from './pages/cliente/agregar/agregar.component';
import { ActualizarUsuariosComponent } from './pages/usuarios/actualizar/actualizar.component';
import { ActualizarClientesComponent } from './pages/cliente/actualizar/actualizar.component';



const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bitacora', component: BitacoraComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'usuarios/agregar', component: AgregarUsuariosComponent },
  {path: 'usuarios/actualizar', component: ActualizarUsuariosComponent },
  {path: 'clientes/agregar', component: AgregarClientesComponent }, 
  {path: 'clientes/actualizar', component: ActualizarClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
