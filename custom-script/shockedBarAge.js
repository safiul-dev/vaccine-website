$(document).ready(function() {
    var stackedChart = echarts.init(document.getElementById('stacked-bar-age'));

    $.ajax({
        url: 'https://covidvaccination-brahmanpara.gov.bd/shocked-bar-chart-age',
        type: 'get',
        success: function(res) {
            // console.log(res)
            stackedChart.setOption({
                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 45,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',

                    axisPointer: { // Axis indicator axis trigger effective
                        type: 'shadow' // The default is a straight line, optionally: 'line' | 'shadow'
                    },
                    formatter: (params) => {

                        var total = params[0].value + params[1].value + params[2].value
                        return `
                                      ${params[0].axisValue} (${total}): <br />
                                      <div style="height: 10px;width: 10px;background-color: ${params[2].color};border-radius: 50%;display: inline-block;"></div> ${params[2].seriesName}: ${params[2].value} <br />
                                      <div style="height: 10px;width: 10px;background-color: ${params[1].color};border-radius: 50%;display: inline-block;"></div> ${params[1].seriesName}: ${params[1].value} <br />
                                      <div style="height: 10px;width: 10px;background-color: ${params[0].color};border-radius: 50%;display: inline-block;"></div> ${params[0].seriesName}: ${params[0].value}
                                      `;
                    },

                },

                // Add legend
                legend: {
                    show: true,
                    data: ['প্রথম ডোজ সম্পন্ন', 'দ্বিতীয় ডোজ সম্পন্ন', 'কোন ডোজ নেওয়া হয়নি']
                },
                // Add custom colors
                color: ['#FFC300', '#228B22', '#EE4B2B', '#000'],

                // Horizontal axis
                yAxis: [{
                    type: 'value',
                    data: '600'
                }],

                // Vertical axis
                xAxis: [{
                    type: 'category',
                    data: ['12-40', '40-60', '60+'],
                    width: '200px'
                }],
                // Add series
                series: [{
                        name: 'প্রথম ডোজ সম্পন্ন',
                        type: 'bar',
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: function(params) {

                                        if (params.name == '12-40') {
                                            return res.percentages.first[0];
                                        } else if (params.name == '40-60') {
                                            return res.percentages.first[1];
                                        } else {
                                            return res.percentages.first[2];
                                        }

                                    }
                                }
                            }
                        },
                        data: res.first_yes
                    },
                    {
                        name: 'দ্বিতীয় ডোজ সম্পন্ন',
                        type: 'bar',
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: function(params) {

                                        if (params.name == '12-40') {
                                            return res.percentages.second[0];
                                        } else if (params.name == '40-60') {
                                            return res.percentages.second[1];
                                        } else {
                                            return res.percentages.second[2];
                                        }

                                    }
                                }
                            }
                        },
                        data: res.second_yes
                    },
                    {
                        name: 'কোন ডোজ নেওয়া হয়নি',
                        type: 'bar',
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: function(params) {
                                        if (params.name == '12-40') {
                                            return res.percentages.nothing[0];
                                        } else if (params.name == '40-60') {
                                            return res.percentages.nothing[1];
                                        } else {
                                            return res.percentages.nothing[2];
                                        }
                                    }
                                }
                            }
                        },
                        data: res.nothing
                    },
                    {
                        type: 'bar',
                        stack: 'one',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(params) {
                                        if (params.name == '12-40') {
                                            return 'Total: ' + res.total[0];
                                        } else if (params.name == '40-60') {
                                            return 'Total: ' + res.total[1];
                                        } else {
                                            return 'Total: ' + res.total[2];
                                        }
                                    }
                                }
                            }
                        },
                        data: [0, 0, 0, 0]
                    },


                ]
            });
        }
    })
})