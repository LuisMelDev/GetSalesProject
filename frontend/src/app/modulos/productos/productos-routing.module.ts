import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ProductoComponent } from './pages/producto/producto.component';


const routes: Routes = [{
  path:'productos',
  component: PrincipalComponent,
  children: [
    {path:'', component:ListarComponent},
    {path:'listado', component:ListarComponent},
    {path:'agregar', component: AgregarComponent},
    {path:'actualizar/:id', component:ActualizarComponent},
    {path:'ver/:id', component:ProductoComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class ProductosRoutingModule { }
