import { LineChartDataModel } from "src/app/models/line-chart-data.model";

export const LineChartData: LineChartDataModel[] = [
    {
        header: {
            color: "text-orange",
            text: 'New Vendors',
            subheading: 'SGD',
            dwmColor: 'btn-orange'
        },
        chart: {
            series: [
                {
                    name: "Revenue",
                    data: [207, 438, 507, 777, 477, 272, 1007, 1877, 277, 227, 197, 1037, 5088, 500, 1000, 7000, 707, 2058, 3052, 2305, 504, 773, 800, 587, 405, 267, 2525, 2025],
                    color: '#6497fb',
                },
                {
                    name: "Number of activities",
                    data: [723, 7472, 375, 277, 493, 282, 1877, 731, 922, 622, 172, 616, 500, 4000, 700, 8000, 577, 5027, 400, 3221, 560, 42, 25, 5055, 2015, 203, 256, 707],
                    color: '#faa559'
                }
            ],
            chart: {
                height: 350,
                type: "line",
                fontFamily: 'Poppins',
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
            stroke: {
                width: [1, 1, 1]
            },
            title: {

            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true
            },
            markers: {
                size: 3,
                strokeColors: '',
                hover: {
                    size: 5
                }
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001",
                "13 Jan 2001",
                "14 Jan 2001",
                "15 Jan 2001",
                "16 Jan 2001",
                "17 Jan 2001",
                "18 Jan 2001",
                "19 Jan 2001",
                "20 Jan 2001",
                "21 Jan 2001",
                "22 Jan 2001",
                "23 Jan 2001",
                "24 Jan 2001",
                "25 Jan 2001",
                "26 Jan 2001",
                "27 Jan 2001",
                "28 Jan 2001",
            ],
            responsive:
                [{
                    breakpoint: 767,
                    options: {
                        chart: {
                            width: 700
                        }
                    }
                }]
            ,
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "Revenue",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    },
                },
                {
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "No of locations",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    }
                }
            ]
        }

    },
    {
        header: {
            color: "text-blue",
            text: 'New Users',
            subheading: '123,456',
            dwmColor: 'btn-blue',
            gstButtons: true
        },
        chart: {
            series: [
                {
                    name: "Revenue",
                    data: [207, 438, 507, 777, 477, 272, 1007, 1877, 277, 227, 197, 1037, 5088, 500, 1000, 7000, 707, 2058, 3052, 2305, 504, 773, 800, 587, 405, 267, 2525, 2025],
                    color: '#6497fb',
                    type: "line",
                },
                {
                    name: "Number of activities",
                    data: [723, 7472, 375, 277, 493, 282, 1877, 731, 922, 622, 172, 616, 500, 4000, 700, 8000, 577, 5027, 400, 3221, 560, 42, 25, 5055, 2015, 203, 256, 707],
                    color: '#faa559',
                    type: "line",
                },
                {
                    name: "Number of locations",
                    type: "column",
                    data: [4740, 5050, 414, 671, 1227, 2413, 2017, 3552, 752, 3120, 2057, 8000, 707, 5264, 1532, 5602, 855, 707, 563, 1234, 201, 505, 175, 258, 236, 2577, 207, 708],
                    color: '#c2c2c2'
                }
            ],
            chart: {
                height: 350,
                type: "line",
                fontFamily: 'Poppins',
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
            stroke: {
                width: [1, 1, 1]
            },
            title: {

            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true
            },
            markers: {
                size: 3,
                strokeColors: '',
                hover: {
                    size: 5
                }
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001",
                "13 Jan 2001",
                "14 Jan 2001",
                "15 Jan 2001",
                "16 Jan 2001",
                "17 Jan 2001",
                "18 Jan 2001",
                "19 Jan 2001",
                "20 Jan 2001",
                "21 Jan 2001",
                "22 Jan 2001",
                "23 Jan 2001",
                "24 Jan 2001",
                "25 Jan 2001",
                "26 Jan 2001",
                "27 Jan 2001",
                "28 Jan 2001",
            ],
            responsive:
                [{
                    breakpoint: 767,
                    options: {
                        chart: {
                            width: 700
                        }
                    }
                }]
            ,
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "Revenue",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    },
                },
                {
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "No of locations",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    }
                }
            ]
        }

    },
    {
        header: {
            color: "text-brown",
            text: 'Number of vendor transactions',
            subheading: '123,456',
            dwmColor: 'btn-brown'
        },
        chart: {
            series: [
                {
                    name: "Revenue",
                    data: [207, 438, 507, 777, 477, 272, 1007, 1877, 277, 227, 197, 1037, 5088, 500, 1000, 7000, 707, 2058, 3052, 2305, 504, 773, 800, 587, 405, 267, 2525, 2025],
                    color: '#6497fb',
                },
                {
                    name: "Number of activities",
                    data: [723, 7472, 375, 277, 493, 282, 1877, 731, 922, 622, 172, 616, 500, 4000, 700, 8000, 577, 5027, 400, 3221, 560, 42, 25, 5055, 2015, 203, 256, 707],
                    color: '#faa559'
                }
            ],
            chart: {
                height: 350,
                type: "line",
                fontFamily: 'Poppins',
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
            stroke: {
                width: [1, 1, 1]
            },
            title: {

            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true
            },
            markers: {
                size: 3,
                strokeColors: '',
                hover: {
                    size: 5
                }
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001",
                "13 Jan 2001",
                "14 Jan 2001",
                "15 Jan 2001",
                "16 Jan 2001",
                "17 Jan 2001",
                "18 Jan 2001",
                "19 Jan 2001",
                "20 Jan 2001",
                "21 Jan 2001",
                "22 Jan 2001",
                "23 Jan 2001",
                "24 Jan 2001",
                "25 Jan 2001",
                "26 Jan 2001",
                "27 Jan 2001",
                "28 Jan 2001",
            ],
            responsive:
                [{
                    breakpoint: 767,
                    options: {
                        chart: {
                            width: 700
                        }
                    }
                }]
            ,
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "Revenue",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    },
                },
                {
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "No of locations",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    }
                }
            ]
        }

    },
    {
        header: {
            color: "text-green",
            text: 'Number of revenue transactions',
            subheading: false,
            dwmColor: 'btn-green'
        },
        chart: {
            series: [
                {
                    name: "Revenue",
                    data: [207, 438, 507, 777, 477, 272, 1007, 1877, 277, 227, 197, 1037, 5088, 500, 1000, 7000, 707, 2058, 3052, 2305, 504, 773, 800, 587, 405, 267, 2525, 2025],
                    color: '#6497fb',
                },
                {
                    name: "Number of activities",
                    data: [723, 7472, 375, 277, 493, 282, 1877, 731, 922, 622, 172, 616, 500, 4000, 700, 8000, 577, 5027, 400, 3221, 560, 42, 25, 5055, 2015, 203, 256, 707],
                    color: '#faa559'
                }
            ],
            chart: {
                height: 350,
                type: "line",
                fontFamily: 'Poppins',
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
            stroke: {
                width: [1, 1, 1]
            },
            title: {

            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true
            },
            markers: {
                size: 3,
                strokeColors: '',
                hover: {
                    size: 5
                }
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001",
                "13 Jan 2001",
                "14 Jan 2001",
                "15 Jan 2001",
                "16 Jan 2001",
                "17 Jan 2001",
                "18 Jan 2001",
                "19 Jan 2001",
                "20 Jan 2001",
                "21 Jan 2001",
                "22 Jan 2001",
                "23 Jan 2001",
                "24 Jan 2001",
                "25 Jan 2001",
                "26 Jan 2001",
                "27 Jan 2001",
                "28 Jan 2001",
            ],
            responsive:
                [{
                    breakpoint: 767,
                    options: {
                        chart: {
                            width: 700
                        }
                    }
                }]
            ,
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "Revenue",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    },
                },
                {
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "No of locations",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    }
                }
            ]
        }

    },
    {
        header: {
            color: "text-violet",
            text: 'BANNER PAGE VISITS',
            subheading: 'SGD',
            dwmColor: 'btn-violet',
            radioSection: true
        },
        chart: {
            series: [
                {
                    name: "Revenue",
                    data: [207, 438, 507, 777, 477, 272, 1007, 1877, 277, 227, 197, 1037, 5088, 500, 1000, 7000, 707, 2058, 3052, 2305, 504, 773, 800, 587, 405, 267, 2525, 2025],
                    color: '#6497fb',
                }
            ],
            chart: {
                height: 350,
                type: "line",
                fontFamily: 'Poppins',
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
            stroke: {
                width: [1, 1, 1]
            },
            title: {

            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false
            },
            markers: {
                size: 3,
                strokeColors: '',
                hover: {
                    size: 5
                }
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001",
                "13 Jan 2001",
                "14 Jan 2001",
                "15 Jan 2001",
                "16 Jan 2001",
                "17 Jan 2001",
                "18 Jan 2001",
                "19 Jan 2001",
                "20 Jan 2001",
                "21 Jan 2001",
                "22 Jan 2001",
                "23 Jan 2001",
                "24 Jan 2001",
                "25 Jan 2001",
                "26 Jan 2001",
                "27 Jan 2001",
                "28 Jan 2001",
            ],
            responsive:
                [{
                    breakpoint: 767,
                    options: {
                        chart: {
                            width: 700
                        }
                    }
                }]
            ,
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "Revenue",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    },
                },
                {
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#c2c2c2"
                    },
                    title: {
                        text: "No of locations",
                        style: {
                            color: "#c2c2c2",
                            fontWeight: '400'
                        }
                    }
                }
            ]
        }

    }
];