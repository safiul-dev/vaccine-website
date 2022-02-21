$(document).ready(function() {

    var options = {
        series: [],
        chart: {
            fontFamily: 'Rubik,sans-serif',
            height: 270,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "rgba(0,0,0,.1)",
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        colors: ['#009efb', '#7460ee', '#212529', '#f62d51', '#71B9E4'],
        fill: {
            type: 'solid',
            opacity: 0.1,
            gradient: {
                shade: 'light',
                type: "vertical",
                gradientToColors: ['#137eff', '#fff'],
                opacityFrom: 0.2,
                opacityTo: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        markers: {
            size: 3,
            strokeColors: "transparent",
        },
        xaxis: {
            categories: [],
            labels: {
                style: {
                    colors: "#a1aab2",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#a1aab2",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
            theme: "dark",
        },
        legend: {
            show: true,
        },
    };


    var chart_area_spline = new ApexCharts(document.querySelector("#entry-chart2"), options);
    chart_area_spline.render();
    var url = 'https://covidvaccination-brahmanpara.gov.bd/line-chart-today'
    $.getJSON(url, function(response) {

        seriesUpdateWithRequest(response)

    })

    function seriesUpdateWithRequest(response) {
        chart_area_spline.updateSeries([{
                name: 'প্রথম ডোজ সম্পন্ন',
                // type:'bar',
                data: response.data.first_yes,

            },
            {
                name: 'দুই ডোজ সম্পন্ন',
                // type:'bar',
                // barWidth : 12,
                // stack: 'search engine',
                data: response.data.second_yes
            }

        ])

        chart_area_spline.updateOptions({
            xaxis: {
                categories: response.data.name
            }
        })

    }

})