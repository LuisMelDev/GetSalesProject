import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ComponentsModule } from "../components/components.module";
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent
  ]
  ,
  imports: [
    CommonModule,
    MainRoutingModule, 
    ComponentsModule
  ]
})
export class MainModule { }
