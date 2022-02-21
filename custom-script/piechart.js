$(document).ready(function() {
    var basicpieChart = echarts.init(document.getElementById('pie1'));

    function piechartOptions(res) {

        basicpieChart.setOption({
            // Add title
            title: {
                text: res.name,
                // subtext: 'Open source information',
                x: 'center',
                top: '95%',
                textStyle: {
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '14',
                    height: '50'
                }
            },
            grid: {
                bottom: 200
            },
            // Add tooltip
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },

            // Add legend
            legend: {
                orient: 'vertical',
                x: 'top',
                data: res.data_main,
                formatter: name => {
                    var series = basicpieChart.getOption().series[0];
                    let total = series.data[0].value + series.data[1].value + series.data[2].value
                    var value = series.data.filter(row => row.name === name)[0].value
                    return name + ' ' + value + ' (' + ((value / total) * 100).toFixed(0) + '%)';
                },
            },

            // Add custom colors
            color: ['#FFC300', '#228B22', '#EE4B2B'],

            // Display toolbox
            toolbox: {
                show: true,
                orient: 'vertical',
                feature: {
                    // mark: {
                    //     show: true,
                    //     title: {
                    //         mark: 'Markline switch',
                    //         markUndo: 'Undo markline',
                    //         markClear: 'Clear markline'
                    //     }
                    // },
                    // dataView: {
                    //     show: true,
                    //     readOnly: false,
                    //     title: 'View data',
                    //     lang: ['View chart data', 'Close', 'Update']
                    // },
                    magicType: {
                        show: true,
                        // title: {
                        //     pie: 'Switch to pies',
                        //     funnel: 'Switch to funnel',
                        // },
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                y: '20%',
                                width: '50%',
                                height: '70%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    // restore: {
                    //     show: true,
                    //     title: 'Restore'
                    // },
                    // saveAsImage: {
                    //     show: true,
                    //     title: 'Same as image',
                    //     lang: ['Save']
                    // }
                }
            },

            // Enable drag recalculate
            calculable: true,

            // Add series
            series: [{
                name: '',
                type: 'pie',
                radius: '70%',
                center: ['50%', '57.5%'],
                data: res.data
            }]
        });
    }

    $.ajax({
        url: "https://covidvaccination-brahmanpara.gov.bd/pie-chart-data",
        type: 'get',
        success: function(res) {
            piechartOptions(res)
        }
    })


})