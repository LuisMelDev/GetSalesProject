import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos del sistema

import { ComprasModule } from './modulos/compras/compras.module';
import { VentasModule } from './modulos/ventas/ventas.module';

//paginas de login y principal
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ComponentsModule } from './components/components.module';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ActualizarProductoComponent  } from "./pages/productos/actualizar/actualizar.component";
import { AgregarProductoComponent } from "./pages/productos/agregar/agregar.component";
import { ListarProductoComponent } from "./pages/productos/listar/listar.component";
import {  AgregarUsuariosComponent } from "./pages/usuarios/agregar/agregar.component";
import { ListarUsuariosComponent } from "./pages/usuarios/listar/listar.component";
import { ActualizarUsuariosComponent } from "./pages/usuarios/actualizar/actualizar.component";
import { ActualizarClientesComponent } from "./pages/clientes/actualizar/actualizar.component";
import { AgregarClientesComponent } from "./pages/clientes/agregar/agregar.component";
import { ListarClientesComponent } from "./pages/clientes/listar/listar.component";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ClientesComponent,
    UsuariosComponent,
    ProductosComponent,
    VentasComponent,
    BitacoraComponent,
    ReportesComponent,
    ActualizarClientesComponent,
    ActualizarProductoComponent,
    ActualizarUsuariosComponent,
    AgregarClientesComponent,
    AgregarProductoComponent,
    AgregarUsuariosComponent,
    ListarProductoComponent,
    ListarUsuariosComponent,
    ListarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComprasModule,
    VentasModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    UsuariosModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
