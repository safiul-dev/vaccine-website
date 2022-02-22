<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>শতভাগ কোভিড টিকা প্রোগ্রাম - ব্রাহ্মণপাড়া, কুমিল্লা</title>
    <link rel="shortcut icon" href="assest/img/n/favicon.png" />
    <link rel="stylesheet" href="">
    <!-- font awesome link -->
    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"> -->
    <!-- bootstrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- animate  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <!-- slick slider  -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <!-- reset link -->

    <link rel="stylesheet" href="assest/css/reset.css">
    <!-- main css -->
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="assest/css/responsive.css"> -->
</head>

<body>
    <!-- header section area start -->
    <header id="header" class="header_area big_section_cmn">
        <div class="top_header">
            <div class="container-fluid">
                <div class="row align_items_cmn">
                    <div class="col-sm-2">
                        <div class="left_logo"> <img src="assest/img/covid/gob logo.png" alt=""> </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="top_header_content">
                            <h1>শতভাগ কোভিড টিকা প্রোগ্রাম</h1>
                            <h2>ব্রাহ্মণপাড়া কুমিল্লা</h2>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class=" right_logo">
                            <img src="assest/img/covid/mobib.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- bootstrap 5 menu  -->
        <nav class="navbar navbar-expand-lg navbar-light menu_area_custom ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- logo area  -->
                    <span class="gov_logo"><img src="assest/img/bd gov logo .png" alt=""></span>
                    <span class="mojib_logo"> <img src="assest/img/mozib-logo.jpg" alt=""> </span>

                    <!-- logo area  -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">কোভিড টিকা প্রোগ্রাম</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">টিকা কেন্দ্র ও কমিটিসমূহ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">কার্যক্রম</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">উপজেলার টিকার পরিস্থিতি</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./reg.php">নিবন্ধন যাচাই</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./download.php">টিকা কার্ড ডাউনলোড</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">স্বেচ্ছাসেবকদের তালিকা</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <!-- bootstrap 5 menu  -->
    </header>
    <!-- end header area  -->


    <!-- middle section  -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="card-title mb-0 text-center mt-3">এক নজরে উপজেলার টিকা চিত্র ( ১২ বছর অথবা তদূর্ধ্ব
                            সকল নাগরিক )</h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div class="row">
                            <div class="col-md-10">
                                <div id="pie1" style="height:400px;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">এক নজরে ইউনিয়ন সমূহের টিকা চিত্র ( ১২ বছর অথবা তদূর্ধ্ব
                            সকল নাগরিক )</h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="stacked-bar" style="height:400px;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">এক নজরে ইউনিয়ন সমূহের টিকা চিত্র ( ১২ বছর অথবা তদূর্ধ্ব
                            সকল নাগরিক ) - শতকরা হার</h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="stacked-bar2" style="height:400px;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">টিকা অপ্রাপ্ত এবং প্রথম ডোজ সম্পূর্ণদের বয়স ভিত্তক
                            বিন্যাস</h4>
                    </div>
                    <div class="card body analytics-info">
                        <div id="stacked-bar-age" style="height:400px;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">প্রথম ডোজ সম্পূর্ণদের বয়স ভিত্তক বিন্যাস - ইউনিয়ন
                            অনুসারে</h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="stacked-bar-age2" style="height:400px;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">এক নজরে টিকার ধরন অনুযায়ী শ্রেনী বিন্যাস - প্রথম ডোজ
                        </h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="pie2" style="height:400px;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">এক নজরে টিকার ধরন অনুযায়ী শ্রেনী বিন্যাস - দ্বিতীয় ডোজ
                        </h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="pie3" style="height:400px;"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">প্রথম ডোজ লিঙ্গ ভিত্তিক শ্রেনী বিন্যাস</h4>
                    </div>
                    <div class="card-body analytics-info">

                        <div id="pie4" style="height:400px;"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">দ্বিতীয় ডোজ লিঙ্গ ভিত্তিক শ্রেনী বিন্যাস</h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="pie5" style="height:400px;"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">দৈনিক নিবন্ধনের হার</h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="entry-chart" class="mt-4"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header border-bottom mt-4">
                        <h4 class="text-center card-title mb-0">দৈনিক নিবন্ধনের হালনাগাদ হার প্রথম ডোজ এবং দ্বিতীয় ডোজ
                        </h4>
                    </div>
                    <div class="card-body analytics-info">
                        <div id="entry-chart2" class="mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- middle section  -->
    <!-- gooter  -->

    <!-- gooter  -->
    <footer class="footer_section  big_section_cmn">
        <!-- footer with menu  -->
        <div class="container-fluid">
            <div class="footer_bottom">
                <h3>আয়োজনেঃ উপজেলা প্রশাসন ব্রাহ্মণপাড়া কুমিল্লা</h3>
                <h3>সহযোগিতায়ঃ উপজেলা পরিষদ ও উপজেলা স্বাস্থ্য ও পরিবার পরিকল্পনা অফিস</h3>
            </div>
        </div>
        <!-- footer with menu  -->
    </footer>
    <!-- Footer area  End -->
    <!-- script -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- bootstrap  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <!-- bootstrap  -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <!-- slick  -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.compatibility.js"></script> -->
    <!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.5.0/just-animate-all.min.js"></script> -->
    <script src="https://kit.fontawesome.com/0fd299362b.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/isotope-layout@3.0.6/dist/isotope.pkgd.min.js"></script>
    <script src="assest/js/packery-mode.pkgd.js"></script>
    <script src="assest/js/skript.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.3.0/dist/echarts.min.js"></script>
    <script src="./apexcharts/dist/apexcharts.min.js"></script>
    <script src="./custom-script/shockedBarChart.js"></script>
    <script src="./custom-script/piechart.js"></script>
    <script src="./custom-script/shockedColunmChart.js"></script>
    <script src="./custom-script/shockedBarAge.js"></script>
    <script src="./custom-script/shockedBarAge2.js"></script>
    <script src="./custom-script/piechartTika1.js"></script>
    <script src="./custom-script/piechartTika2.js"></script>
    <script src="./custom-script/piechartGender1.js"></script>
    <script src="./custom-script/piechartGender2.js"></script>
    <script src="./custom-script/linchart-daily.js"></script>
    <script>
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

        var chart_area_spline = new ApexCharts(document.querySelector("#entry-chart"), options);
        chart_area_spline.render();
        var url = 'https://uno.covidvaccination-brahmanpara.gov.bd/home'
        $.getJSON(url, function(response) {

            seriesUpdateWithRequest(response)

        })

        function seriesUpdateWithRequest(response) {
            chart_area_spline.updateSeries([{
                    name: 'মোট নিবন্ধিত',
                    // type:'bar',
                    // stack: 'মোট ডাটা',
                    data: response.data.value
                },
                {
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
                },
                {
                    name: 'টিকা নেয়নি',
                    // type:'bar',
                    // stack: 'search engine',
                    data: response.data.firs_no
                }
            ])

            chart_area_spline.updateOptions({
                xaxis: {
                    categories: response.data.name
                }
            })

        }

    })
    </script>
</body>

</html>