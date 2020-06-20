import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: PrincipalComponent,
    children: [
      {path:'agregar',component:AgregarComponent},
      {path:'actualizar/:id',component:ActualizarComponent},
      {path:'listado',component:ListarComponent},
      {path:'usuario/:id',component:UsuarioComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
 