import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../guards/auth.guard";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { AgregarCompraComponent } from './pages/agregar-compra/agregar-compra.component';
import { ConsultarCompraComponent } from './pages/consultar-compra/consultar-compra.component';
import { AgregarVentaComponent } from "./pages/agregar-venta/agregar-venta.component";
import { ConsultarVentaComponent } from "./pages/consultar-venta/consultar-venta.component";


const routes: Routes = [
  { 
    path: 'main', 
    component: MainComponent,canActivate:[AuthGuard], 
    children: [
      {path:'', component:DashboardComponent},
      {path:'principal', component:DashboardComponent},
      {path:'clientes', component: ClientesComponent},
      {path:'productos', component: ProductosComponent},
      {path:'usuarios', component: UsuariosComponent},
      {path:'proveedores', component: ProveedoresComponent}, 
      {path:'registrar-compra', component: AgregarCompraComponent},
      {path:'consultar-compras', component: ConsultarCompraComponent},
      {path:'registrar-venta/:clienteID', component: AgregarVentaComponent},
      {path:'registrar-venta', component: AgregarVentaComponent},
      {path:'consultar-ventas', component: ConsultarVentaComponent},
      {path:'**', redirectTo:'/main'}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}