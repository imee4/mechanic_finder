import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMRoutingModule, } from './dashboard-m-routing.module';
import { DashboardMComponent } from './dashboard-m.component';
import { AvatarModule, ButtonGroupModule, ButtonModule, CardModule, FormModule, ProgressModule, TableModule, TabsModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [DashboardMComponent],
  imports: [
    CommonModule,
    DashboardMRoutingModule,
    DashboardMRoutingModule,
    DashboardMComponent,
    CardModule,
    NgModule,
    NgModule,
    TabsModule,
    CommonModule,
    NgModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule
  ]
})
export class  DashboardMModule { }
