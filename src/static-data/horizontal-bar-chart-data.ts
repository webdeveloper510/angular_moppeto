import { HorizontalBarChartDataModel } from "src/app/models/horizontal-bar-chart-data.model";

export const HorizontalBarChartData: HorizontalBarChartDataModel[] = [
    {
        header: {
            text: 'total vendors',
            color: "text-teal",
            subheading: '123,456'
        },
        chart: {
            series: [
                {
                    name: "serie1",
                    data: [33243, 31462, 28583, 20346, 17492, 14294, 8904],
                    color: '#05cfab'
                }
            ],
            grid: {
                show: false
            },
            legend: {
                show: false
            },
            chart: {
                type: "bar",
                height: 410,
                fontFamily: 'Poppins',
                width: '100%',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "100",
                    borderRadius: 5,
                    horizontal: true,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -5,
                style: {
                    fontSize: "14px",
                    colors: ["#fff"],
                    fontWeight: 500
                },
                // formatter: function (val, opt) {
                // return opt.w.globals.labels[opt.dataPointIndex] + " " + val
                // },
            },
            responsive:
                [{
                    breakpoint: 575,
                    options: {
                        dataLabels: {
                            offsetX: -2,
                            style: {
                                fontSize: "12px",
                            }
                        },
                    }
                }],
            stroke: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: ['Singapore', 'India', 'Malaysia', 'Vietnam', 'Indonesia', 'XXXX..', 'XXX...'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: '#000',
                        fontSize: "12px",
                        fontWeight: "600"
                    }
                },
                axisBorder: {
                    show: false
                }
            }
        }
    },


    {
        header: {
            text: 'total users',
            color: "text-orange",
            subheading: '123,456'
        },
        chart: {
            series: [
                {
                    name: "serie1",
                    data: [33243, 31462, 28583, 20346, 17492, 14294, 8904],
                    color: '#ffa800'
                }
            ],
            grid: {
                show: false
            },
            legend: {
                show: false
            },
            chart: {
                type: "bar",
                height: 410,
                fontFamily: 'Poppins',
                width: '100%',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "100",
                    borderRadius: 5,
                    horizontal: true,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -5,
                style: {
                    fontSize: "14px",
                    colors: ["#fff"],
                    fontWeight: 500
                },
                // formatter: function (val, opt) {
                // return opt.w.globals.labels[opt.dataPointIndex] + " " + val
                // },
            },
            responsive:
                [{
                    breakpoint: 575,
                    options: {
                        dataLabels: {
                            offsetX: -2,
                            style: {
                                fontSize: "12px",
                            }
                        },
                    }
                }],
            stroke: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: ['Singapore', 'India', 'Malaysia', 'Vietnam', 'Indonesia', 'XXXX..', 'XXX...'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: '#000',
                        fontSize: "12px",
                        fontWeight: "600"
                    }
                },
                axisBorder: {
                    show: false
                }
            }
        }
    }
];