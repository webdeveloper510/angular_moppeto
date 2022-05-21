import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent
} from "ng-apexcharts";
import { LineChartDataModel, LineChartOptions } from 'src/app/models/line-chart-data.model';




@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  @Input() lineChartData: LineChartDataModel;
  public chartOptions: Partial<LineChartOptions>;


  selectedGST: string = "Without GST";
  selecteDdayWeekMonth: string = "Day";

  withOrWithOutGST = ["Without GST", "With GST"]
  dayWeekMonth = ["Day", "Week", "Month"]

  constructor() {
  }


  ngOnInit(): void {
    console.log(this.lineChartData);
    this.chartOptions = this.lineChartData.chart;
  }

  bannerPageRadioValues = [
    {
      id: 'page1',
      value: 'Reasoning/logic'
    },
    {
      id: 'page2',
      value: 'Language'
    },
    {
      id: 'page3',
      value: 'S.T.E.M.'
    },
    {
      id: 'page4',
      value: 'Sports'
    },
    {
      id: 'page5',
      value: 'Creativity'
    },
    {
      id: 'page6',
      value: 'Business World'
    },
    {
      id: 'page7',
      value: 'World Savvy'
    },
    {
      id: 'page8',
      value: 'Fun'
    },
    {
      id: 'page9',
      value: 'Holiday camp'
    },
    {
      id: 'page10',
      value: 'Special interven'
    },
    {
      id: 'page11',
      value: 'Extra1'
    },
    {
      id: 'page12',
      value: 'Extra2'
    },
    {
      id: 'page13',
      value: 'Extra4'
    },
    {
      id: 'page14',
      value: 'Extra5'
    },
    {
      id: 'page15',
      value: 'Extra6'
    },
    {
      id: 'page16',
      value: 'Extra7'
    },
    {
      id: 'page17',
      value: 'Extra8'
    },
    {
      id: 'page18',
      value: 'Extra9'
    },
    {
      id: 'page19',
      value: 'Extra10'
    },
    {
      id: 'page20',
      value: 'Extra11'
    },
    {
      id: 'page21',
      value: 'Extra12'
    },
    {
      id: 'page22',
      value: 'Extra13'
    },
    {
      id: 'page23',
      value: 'Extra14'
    },
    {
      id: 'page24',
      value: 'Extra15'
    }



















  ]

}
