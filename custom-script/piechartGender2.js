$(document).ready(function() {
    var basicpieChart = echarts.init(document.getElementById('pie5'));

    function piechartOptions(res) {
        basicpieChart.setOption({
            // Add title
            // title: {
            //     text: 'Browser popularity',
            //     subtext: 'Open source information',
            //     x: 'center'
            // },

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
                    let total = 0;
                    series.data.map((item) => total += item.value)
                    var value = series.data.filter(row => row.name === name)[0].value
                    return name + ' ' + value + ' (' + ((value / total) * 100).toFixed(2) + '%)';
                },
            },

            // Add custom colors
            color: ['#71B9E4', '#53A779', '#E25D3C', '#8A8E05'],

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
        url: "https://uno.covidvaccination-brahmanpara.gov.bd/pie-chart-data-gender2",
        type: 'get',
        success: function(res) {
            // console.log(res)
            piechartOptions(res)
        }
    })



})