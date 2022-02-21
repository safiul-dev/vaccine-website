$(document).ready(function() {
    // ------------------------------
    // Stacked bar chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
    var stackedChart = echarts.init(document.getElementById('stacked-bar-age2'));

    $.ajax({
        url: 'https://covidvaccination-brahmanpara.gov.bd/shocked-bar-chart-age2',
        type: 'get',
        success: function(res) {
            //   console.log(res);
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
                                  <div style="height: 10px;width: 10px;background-color: ${params[2].color};border-radius: 50%;display: inline-block;"></div> ${params[2].seriesName}: ${((100 * params[2].value) / total).toFixed(2)} %<br />
                                  <div style="height: 10px;width: 10px;background-color: ${params[1].color};border-radius: 50%;display: inline-block;"></div> ${params[1].seriesName}: ${((100 * params[1].value) / total).toFixed(2)} %<br />
                                  <div style="height: 10px;width: 10px;background-color: ${params[0].color};border-radius: 50%;display: inline-block;"></div> ${params[0].seriesName}: ${((100 * params[0].value) / total).toFixed(2)} %
                                  `;

                    },
                },

                // Add legend
                legend: {
                    show: true,
                    data: ['12-40', '40-60', '40-60', '60+']
                },

                // Add custom colors
                color: ['#71B9E4', '#53A779', '#E25D3C', '#000'],

                // Horizontal axis
                yAxis: [{
                    type: 'value',
                    data: ['12-40', '40-60', '40-60', '60+']
                }],

                // Vertical axis
                xAxis: [{
                    type: 'category',
                    data: res.name
                }],

                // Add series
                series: [{
                        name: '12-40',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    formatter: function(params) {
                                        if (params.name == 'মাধবপুর') {
                                            return res.percentages.age1240[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return res.percentages.age1240[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return res.percentages.age1240[2];
                                        } else if (params.name == 'শশীদল') {
                                            return res.percentages.age1240[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return res.percentages.age1240[4];
                                        } else if (params.name == 'সদর') {
                                            return res.percentages.age1240[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return res.percentages.age1240[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return res.percentages.age1240[7];
                                        }
                                    }
                                }
                            }
                        },
                        data: res.age1240
                    },
                    {
                        name: '40-60',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    formatter: function(params) {
                                        if (params.name == 'মাধবপুর') {
                                            return res.percentages.age4060[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return res.percentages.age4060[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return res.percentages.age4060[2];
                                        } else if (params.name == 'শশীদল') {
                                            return res.percentages.age4060[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return res.percentages.age4060[4];
                                        } else if (params.name == 'সদর') {
                                            return res.percentages.age4060[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return res.percentages.age4060[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return res.percentages.age4060[7];
                                        }

                                    }
                                }
                            }
                        },
                        data: res.age4060
                    },
                    {
                        name: '60+',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    formatter: function(params) {
                                        if (params.name == 'মাধবপুর') {
                                            return res.percentages.age60[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return res.percentages.age60[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return res.percentages.age60[2];
                                        } else if (params.name == 'শশীদল') {
                                            return res.percentages.age60[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return res.percentages.age60[4];
                                        } else if (params.name == 'সদর') {
                                            return res.percentages.age60[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return res.percentages.age60[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return res.percentages.age60[7];
                                        }
                                    }
                                }
                            }
                        },
                        data: res.age60
                    },
                    {
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(params) {

                                        if (params.name == 'মাধবপুর') {
                                            return 'Total: ' + res.total[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return 'Total: ' + res.total[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return 'Total: ' + res.total[2];
                                        } else if (params.name == 'শশীদল') {
                                            return 'Total: ' + res.total[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return 'Total: ' + res.total[4];
                                        } else if (params.name == 'সদর') {
                                            return 'Total: ' + res.total[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return 'Total: ' + res.total[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return 'Total: ' + res.total[7];
                                        }
                                    }
                                }
                            }
                        },
                        data: [0, 0, 0, 0, 0, 0, 0, 0]
                    },

                ]
            });
        }


    })


})