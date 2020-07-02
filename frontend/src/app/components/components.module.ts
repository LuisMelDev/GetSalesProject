import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
      BarChartComponent,
      LineChartComponent,
      NavbarComponent,
      UserDropdownComponent,
      SidebarComponent,
      AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BarChartComponent,
    LineChartComponent,
    NavbarComponent,
    UserDropdownComponent,
    SidebarComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }
