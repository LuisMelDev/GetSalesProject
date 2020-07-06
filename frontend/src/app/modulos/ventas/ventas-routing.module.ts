import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { VerComponent } from './pages/ver/ver.component';

const routes: Routes = [
  {
    path: 'ventas',
    component: PrincipalComponent,
    children: [
      {path: 'registrar', component: RegistrarComponent},
      {path: 'listado', component: ListadoComponent},
      {path: 'factura/:id', component: VerComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}
