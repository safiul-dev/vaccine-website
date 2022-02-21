$(document).ready(function() {
    // ------------------------------
    // Stacked bar chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
    var stackedChart = echarts.init(document.getElementById('stacked-bar2'));

    // specify chart configuration item and data

    // use configuration item and data specified to show chart


    $.ajax({
        url: 'https://covidvaccination-brahmanpara.gov.bd/shocked-bar-chart',
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
                    data: ['প্রথম ডোজ সম্পন্ন', 'দ্বিতীয় ডোজ সম্পন্ন', 'কোন ডোজ নেওয়া হয়নি']
                },

                // Add custom colors
                color: ['#FFC300', '#228B22', '#EE4B2B', '#000'],

                // Horizontal axis
                yAxis: [{
                    type: 'value',
                }],

                // Vertical axis
                xAxis: [{
                    type: 'category',
                    data: res.name
                }],

                // Add series
                series: [{
                        name: 'প্রথম ডোজ সম্পন্ন',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: function(params) {

                                        if (params.name == 'মাধবপুর') {
                                            return res.percentages.first[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return res.percentages.first[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return res.percentages.first[2];
                                        } else if (params.name == 'শশীদল') {
                                            return res.percentages.first[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return res.percentages.first[4];
                                        } else if (params.name == 'সদর') {
                                            return res.percentages.first[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return res.percentages.first[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return res.percentages.first[7];
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
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: function(params) {
                                        if (params.name == 'মাধবপুর') {
                                            return res.percentages.second[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return res.percentages.second[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return res.percentages.second[2];
                                        } else if (params.name == 'শশীদল') {
                                            return res.percentages.second[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return res.percentages.second[4];
                                        } else if (params.name == 'সদর') {
                                            return res.percentages.second[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return res.percentages.second[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return res.percentages.second[7];
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
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: function(params) {
                                        if (params.name == 'মাধবপুর') {
                                            return res.percentages.nothing[0];
                                        } else if (params.name == 'শিদলাই') {
                                            return res.percentages.nothing[1];
                                        } else if (params.name == 'চান্দলা') {
                                            return res.percentages.nothing[2];
                                        } else if (params.name == 'শশীদল') {
                                            return res.percentages.nothing[3];
                                        } else if (params.name == 'দুলালপুর') {
                                            return res.percentages.nothing[4];
                                        } else if (params.name == 'সদর') {
                                            return res.percentages.nothing[5];
                                        } else if (params.name == 'সাহেবাবাদ') {
                                            return res.percentages.nothing[6];
                                        } else if (params.name == 'মালাপাড়া') {
                                            return res.percentages.nothing[7];
                                        }
                                    }
                                }
                            }
                        },
                        data: res.nothing
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