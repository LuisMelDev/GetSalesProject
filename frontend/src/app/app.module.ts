import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos del sistema
import { AdministracionModule } from './modulos/administracion/administracion.module';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { ComprasModule } from './modulos/compras/compras.module';
import { ProductosModule } from './modulos/productos/productos.module';
import { VentasModule } from './modulos/ventas/ventas.module';

//paginas de login y principal
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministracionModule,
    ClientesModule,
    ComprasModule,
    ProductosModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
