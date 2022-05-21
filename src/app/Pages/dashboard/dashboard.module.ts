import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DragDropModule } from 'primeng/dragdrop';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DragDropModule,
    RadioButtonModule
  ]
})
export class DashboardModule { }
