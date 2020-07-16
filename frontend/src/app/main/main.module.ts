import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MomentModule } from "angular2-moment";

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ComponentsModule } from "../components/components.module";
import { MainComponent } from './pages/main/main.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AgregarCliente } from "./pages/clientes/agregarCliente/agregarCliente.component";
import { ModificarCliente } from "./pages/clientes/modificarCliente/modificarCliente.component";
import { VerCliente } from "./pages/clientes/verCliente/verCliente.component";
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AgregarUsuario } from './pages/usuarios/agregarUsuario/agregarUsuario.component';
import { ModificarUsuario } from './pages/usuarios/modificarUsuario/modificarUsuario.component';
import { VerUsuario } from './pages/usuarios/verUsuario/verUsuario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AgregarProducto } from './pages/productos/agregarProducto/agregarProducto.component';
import { ModificarProducto } from './pages/productos/modificarProducto/modificarProducto.component';
import { VerProducto } from './pages/productos/verProducto/verProducto.component';
import { ProveedoresComponent } from "./pages/proveedores/proveedores.component";
import { AgregarProveedor } from "./pages/proveedores/agregarProveedor/agregarProveedor.component";
import { ModificarProveedor } from "./pages/proveedores/modificarProveedor/modificarProveedor.component";
import { VerProveedor } from "./pages/proveedores/verProveedor/verProveedor.component";
import { AgregarCompraComponent } from './pages/agregar-compra/agregar-compra.component';
import { ConsultarCompraComponent } from './pages/consultar-compra/consultar-compra.component';
import { AgregarVentaComponent } from "./pages/agregar-venta/agregar-venta.component";
import { ConsultarVentaComponent } from "./pages/consultar-venta/consultar-venta.component";
import { ElegirCliente } from "./pages/agregar-venta/agregarCliente/elegirCliente.component";
import { ElegirProducto } from "./pages/agregar-venta/agregarProducto/elegirProducto.component";
import { ElegirProveedor } from './pages/agregar-compra/agregarProveedor/elegirProveedor.component';
import { ElegirProducto2 } from './pages/agregar-compra/agregarProducto/elegirProducto.component';
import { FacturaVentaComponent } from './pages/factura-venta/factura-venta.component';
import { FacturaCompraComponent } from './pages/factura-compra/factura-compra.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { PanelUsuarioComponent } from './pages/panel-usuario/panel-usuario.component';
// import { ReportesComponent } from './pages/reportes/reportes.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    UsuariosComponent,
    AgregarUsuario,
    ModificarUsuario,
    VerUsuario,
    ProductosComponent,
    AgregarProducto,
    ModificarProducto,
    VerProducto,
    ClientesComponent,
    AgregarCliente,
    ModificarCliente,
    VerCliente,
    ProveedoresComponent,
    AgregarProveedor,
    ModificarProveedor,
    VerProveedor,
    AgregarCompraComponent,
    ConsultarCompraComponent,
    ConsultarVentaComponent,
    AgregarVentaComponent,
    ElegirCliente,
    ElegirProducto,
    ElegirProveedor, 
    ElegirProducto2, 
    FacturaVentaComponent, 
    FacturaCompraComponent, 
    BitacoraComponent, 
    PanelUsuarioComponent,
    //  ReportesComponent
  ]
  ,
  imports: [
    CommonModule,
    MainRoutingModule, 
    ComponentsModule,
    ReactiveFormsModule,
    MomentModule
  ]
})
export class MainModule { }
