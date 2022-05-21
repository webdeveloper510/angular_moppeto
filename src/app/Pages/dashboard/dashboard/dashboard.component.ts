import { Component, OnInit } from '@angular/core';
import { LineChartData } from 'src/static-data/line-chart-data';
import { HorizontalBarChartData } from 'src/static-data/horizontal-bar-chart-data';

interface ChartClassSwitch {
  row1: {
    col1: boolean,
    col2: boolean
  },
  row2: {
    col1: boolean,
    col2: boolean
  },
  row3: {
    col1: boolean,
    col2: boolean
  },
  row4: {
    col1: boolean,
    col2: boolean
  },
  row5: {
    col1: boolean,
    col2: boolean
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  countries = ["all", "country a", "country b", "country c", "country d", "country e", "country f"]
  selectedCountry: string = "all";
  lineChartData = LineChartData;
  horizontalBarChartData = HorizontalBarChartData;
  showSection: boolean = true;
  hideSection: boolean = false;

  chartClassSwitch: ChartClassSwitch;
  constructor() { }

  ngOnInit(): void {
    this.refreshChartClasses();
  }

  changeCity() {
    this.refreshChartClasses();
    if (this.selectedCountry == "all") {
      this.showSection = true
      this.hideSection = false
    }
    if (this.selectedCountry == "country a") {
      this.chartClassSwitch.row1.col2 = false
      this.chartClassSwitch.row3.col1 = false
      this.showSection = false
      this.hideSection = true
    }

  }

  refreshChartClasses() {
    this.chartClassSwitch = {
      row1: {
        col1: true,
        col2: true
      },
      row2: {
        col1: true,
        col2: true
      },
      row3: {
        col1: true,
        col2: true
      },
      row4: {
        col1: true,
        col2: true
      },
      row5: {
        col1: true,
        col2: true
      }
    }
  }



}
