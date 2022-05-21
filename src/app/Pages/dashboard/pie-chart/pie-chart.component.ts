import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexDataLabels, ApexFill, ApexLegend, ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  legend: ApexLegend,
  fill: ApexFill,
  dataLabels: ApexDataLabels;
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  colorArray = ['#6497FB', '#CB89FF', '#6FCF97', '#FF8989']

  constructor() {
    this.chartOptions = {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '12',
        markers: {
          fillColors: this.colorArray
        }
      },
      fill: {
        colors: this.colorArray
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, { seriesIndex, dpIndex, w }) {
          return w.globals.series[seriesIndex];
        },
        offsetX: 100,
        style: {
          fontSize: '19px',
          fontWeight: '500',
        },
        dropShadow: {
          enabled: false
        }
      },

      series: [357, 345, 78, 324],
      chart: {
        height: 390,
        type: "pie",
        fontFamily: 'Poppins'
      },
      labels: ["Activity Title", "Advanced", "Premium", "Enterprise"],
      responsive: [
        {
          breakpoint: 1199,
          options: {
            chart: {

            },
            legend: {
              position: "bottom"
            }
          }
        },
        {
          breakpoint: 575,
          options: {
            dataLabels: {
              style: {
                fontSize: '15px',
                fontWeight: '500',
              }
            }
          },
        }
      ]
    };
  }

  ngOnInit(): void { }

}
