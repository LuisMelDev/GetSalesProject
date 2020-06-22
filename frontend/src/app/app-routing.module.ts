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
import { AgregarClientesComponent } from './pages/clientes/agregar/agregar.component';
import { ActualizarUsuariosComponent } from './pages/usuarios/actualizar/actualizar.component';
import { ActualizarClientesComponent } from './pages/clientes/actualizar/actualizar.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ListarProveedoresComponent } from "./pages/proveedores/listar/listar.component";
import { AgregarProveedoresComponent } from "./pages/proveedores/agregar/agregar.component";
import { ActualizarProveedoresComponent } from "./pages/proveedores/actualizar/actualizar.component";



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
  {path: 'clientes/actualizar', component: ActualizarClientesComponent },
  {path: 'proveedores', component: ProveedoresComponent }, 
  {path: 'proveedores/listar', component: ListarProveedoresComponent },
  {path: 'proveedores/agregar', component: AgregarProveedoresComponent},
  {path: 'proveedores/actualizar', component: ActualizarProveedoresComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
