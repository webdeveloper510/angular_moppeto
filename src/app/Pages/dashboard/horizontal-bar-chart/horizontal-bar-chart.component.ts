import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent
} from "ng-apexcharts";
import { HorizontalBarChartDataModel, HorizontalBarChartOptions } from 'src/app/models/horizontal-bar-chart-data.model';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @Input() horizontalBarChartData: HorizontalBarChartDataModel;
  public chartOptions: Partial<HorizontalBarChartOptions>;

  constructor() {

  }

  ngOnInit(): void {
    this.chartOptions = this.horizontalBarChartData.chart;
  }

}
