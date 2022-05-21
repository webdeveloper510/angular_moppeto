import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexXAxis,
    ApexPlotOptions,
    ApexYAxis,
    ApexStroke,
    ApexMarkers,
    ApexLegend,
    ApexGrid,
    ApexResponsive
} from "ng-apexcharts";

export class HorizontalBarChartDataModel {
    header: HeaderFormat;
    chart: HorizontalBarChartOptions
}

export class HeaderFormat {
    text: string;
    subheading: any;
    color: string
}

export type HorizontalBarChartOptions = {
    series?: ApexAxisChartSeries;
    legend?: ApexLegend;
    chart?: ApexChart;
    dataLabels?: ApexDataLabels;
    plotOptions?: ApexPlotOptions;
    xaxis?: ApexXAxis;
    yaxis?: ApexYAxis;
    stroke?: ApexStroke;
    markers?: ApexMarkers;
    grid?: ApexGrid;
    responsive?: ApexResponsive[];
};