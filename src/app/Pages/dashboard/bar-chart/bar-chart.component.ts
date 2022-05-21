import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "App visits",
          data: [44, 55, 41, 57, 22, 43, 21, 47, 37, 17],
          color: '#faa559',
          type: 'column'
        },
        {
          name: "Web visits",
          data: [53, 32, 33, 52, 13, 44, 32, 17, 47, 25],
          color: '#6fcf97',
          type: 'column'
        }
      ],
      chart: {
        type: "line",
        height: 370,
        toolbar: {
          show: true,
          tools: {
            download: '<img src="../../../../assets/Dashboard/download.svg">',
            pan: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            reset: '<img src="../../../../assets/Dashboard/resetIcon.svg">',
          },
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      yaxis: {
        axisBorder: {
          show: true
        },
      }
    };
  }

  ngOnInit(): void {

  }

}
