import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { VerComponent } from './pages/ver/ver.component';


const routes: Routes = [{
  path: 'compras',
  component: PrincipalComponent,
  children: [
    {path:'registrar', component:AgregarComponent},
    {path: 'consultar', component: ConsultarComponent},
    {path: 'compra/:id', component: VerComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
