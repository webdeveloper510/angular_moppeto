import {
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexMarkers,
  ApexLegend,
  ApexResponsive
} from "ng-apexcharts";


export class LineChartDataModel {
  header: HeaderFormat;
  chart: LineChartOptions
}

export class HeaderFormat {
  text: string;
  subheading: any;
  color: string
  dwmColor: string;
  gstButtons?: boolean;
  radioSection?: boolean;
}

export type LineChartOptions = {
  series: any;
  chart: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  title?: ApexTitleSubtitle;
  labels?: string[];
  stroke?: any; // ApexStroke;
  dataLabels?: any; // ApexDataLabels;
  fill?: ApexFill;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  legend?: ApexLegend;
  responsive?: ApexResponsive[];
};