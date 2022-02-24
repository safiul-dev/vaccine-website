$(document).ready(function() {
    changeDate();

    function changeDate() {
        for (var i = 1; i < 32; i++) {
            $('#day').append('<option value="' + i + '">' + etob(i) + '</option>');
        }
        let months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগষ্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
        for (let i = 0; i < months.length; i++) {
            $('#month').append('<option value="' + (i + 1) + '">' + months[i] + '</option>');
        }

        for (let i = 2018; i > 1950; i--) {
            $('#Year').append('<option value="' + i + '">' + etob(i) + '</option>');
        }

        for (var i = 1; i < 32; i++) {
            $('#day2').append('<option value="' + i + '">' + etob(i) + '</option>');
        }

        for (let i = 0; i < months.length; i++) {
            $('#month2').append('<option value="' + (i + 1) + '">' + months[i] + '</option>');
        }

        for (let i = 2018; i > 1950; i--) {
            $('#Year2').append('<option value="' + i + '">' + etob(i) + '</option>');
        }
        for (var i = 1; i < 32; i++) {
            $('#day3').append('<option value="' + i + '">' + etob(i) + '</option>');
        }

        for (let i = 0; i < months.length; i++) {
            $('#month3').append('<option value="' + (i + 1) + '">' + months[i] + '</option>');
        }

        for (let i = 2018; i > 1950; i--) {
            $('#Year3').append('<option value="' + i + '">' + etob(i) + '</option>');
        }
    }

    function etob(day) {
        let days = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        if (day > 9) {
            // split the day into two digits
            var day_split = day.toString().split('');
            var day_first = [];
            for (var i = 0; i < day_split.length; i++) {
                day_split[i] = parseInt(day_split[i]);
                for (let j = 0; j < days.length; j++) {
                    if (day_split[i] == j) {
                        day_first[i] = days[j];
                    }
                }
            }
            return day_first.toString().replace(/,/g, '')

        }

        for (let i = 0; i < days.length + 1; i++) {
            if (day == i) {
                return days[i];
            }
        }
    }

    $('#submit').on('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            let nid = $('#nid_no').val();
            // date format
            let date = $('#Year').val() + '-' + $('#month').val() + '-' + $('#day').val();

            $.ajax({
                url: 'https://uno.covidvaccination-brahmanpara.gov.bd/generate-pdf',
                type: 'get',
                data: {
                    nid: nid,
                    date: date
                },
                success: function(res) {
                    // $('#pdf-show').html(res.pdf);
                    if (res.status == 'success') {
                        $('.success_massage').css('display', 'block');
                        $('.error_massage').css('display', 'none');
                    } else {
                        $('.error_massage').css('display', 'block');
                        $('.success_massage').css('display', 'none');
                    }

                }
            })
        }

    })

    $('#submit-pass').on('submit', function(e) {
        e.preventDefault();

        if (validateForm3()) {
            let nid = $('#nid_no3').val();
            // date format
            let date = $('#Year3').val() + '-' + $('#month3').val() + '-' + $('#day3').val();

            $.ajax({
                url: 'https://uno.covidvaccination-brahmanpara.gov.bd/check-user-registered',
                type: 'get',
                data: {
                    nid: nid,
                    date: date
                },
                success: function(res) {
                    if (res.status == 'success') {
                        $('.success_massage').css('display', 'block');
                        $('.error_massage').css('display', 'none');
                    } else {
                        $('.error_massage').css('display', 'block');
                        $('.success_massage').css('display', 'none');
                    }

                }
            })
        }

    })
    $('#submit-birth').on('submit', function(e) {
        e.preventDefault();

        if (validateForm2()) {
            let nid = $('#nid_no2').val();
            // date format
            let date = $('#Year2').val() + '-' + $('#month2').val() + '-' + $('#day2').val();

            $.ajax({
                url: 'https://uno.covidvaccination-brahmanpara.gov.bd/check-user-registered',
                type: 'get',
                data: {
                    nid: nid,
                    date: date
                },
                success: function(res) {
                    if (res.status == 'success') {
                        $('.success_massage').css('display', 'block');
                        $('.error_massage').css('display', 'none');
                    } else {
                        $('.error_massage').css('display', 'block');
                        $('.success_massage').css('display', 'none');
                    }

                }
            })
        }

    })

    // validation function for form submit
    function validateForm() {
        let nid = $('#nid_no').val();
        let day = $('#day').val();
        let month = $('#month').val();
        let year = $('#Year').val();
        if (!nid || !day || !month || !year) {
            $('.error').html('<div class="alert alert-danger">আপনার সমস্ত তথ্য পূরণ করুন</div>');
            setTimeout(function() {
                $('.error').html('');
            }, 3000);
            return false;
        }
        return true;
    }

    function validateForm2() {
        let nid = $('#nid_no2').val();
        let day = $('#day2').val();
        let month = $('#month2').val();
        let year = $('#Year2').val();
        if (!nid || !day || !month || !year) {
            $('.error').html('<div class="alert alert-danger">আপনার সমস্ত তথ্য পূরণ করুন</div>');
            setTimeout(function() {
                $('.error').html('');
            }, 3000);
            return false;
        }
        return true;
    }

    function validateForm3() {
        let nid = $('#nid_no3').val();
        let day = $('#day3').val();
        let month = $('#month3').val();
        let year = $('#Year3').val();
        if (!nid || !day || !month || !year) {
            $('.error').html('<div class="alert alert-danger">আপনার সমস্ত তথ্য পূরণ করুন</div>');
            setTimeout(function() {
                $('.error').html('');
            }, 3000);
            return false;
        }
        return true;
    }

    $('#passport-vaccine-card').on('submit', function(e) {
        e.preventDefault();
        let otp = $('#otp').val();
        if (otp) {
            $.ajax({
                url: 'https://uno.covidvaccination-brahmanpara.gov.bd/generate-pdf',
                type: 'get',
                data: {
                    otp: otp,
                },
                success: function(res) {
                    url = new URL('https://covidvaccination-brahmanpara.gov.bd/titkaCard.html');
                    url.searchParams.append('subcenter', res.data.subcenter);
                    url.searchParams.append('name', res.data.name);
                    url.searchParams.append('nid', res.data.nid);
                    url.searchParams.append('age', res.data.age);
                    url.searchParams.append('dob', res.data.dob);
                    url.searchParams.append('donner_name', res.data.donner_name);
                    url.searchParams.append('donner_phone', res.data.donner_phone);
                    url.searchParams.append('firstVaccineDate', res.data.first_dose_date);
                    url.searchParams.append('phone', res.data.phone);
                    url.searchParams.append('firstVaccineName', res.data.first_vacine_name);
                    url.searchParams.append('secondVaccineDate', res.data.second_dose_date);
                    url.searchParams.append('secondVaccineName', res.data.second_vacine_name);
                    window.location.href = url;
                }
            })
        }

    })
    $('#birth-vaccine-card').on('submit', function(e) {
        e.preventDefault();
        let otp = $('#birth-otp').val();
        if (otp) {
            $.ajax({
                url: 'https://uno.covidvaccination-brahmanpara.gov.bd/generate-pdf',
                type: 'get',
                data: {
                    otp: otp,
                },
                success: function(res) {
                    url = new URL('https://covidvaccination-brahmanpara.gov.bd/titkaCard.html');
                    url.searchParams.append('subcenter', res.data.subcenter);
                    url.searchParams.append('name', res.data.name);
                    url.searchParams.append('nid', res.data.nid);
                    url.searchParams.append('age', res.data.age);
                    url.searchParams.append('dob', res.data.dob);
                    url.searchParams.append('donner_name', res.data.donner_name);
                    url.searchParams.append('donner_phone', res.data.donner_phone);
                    url.searchParams.append('firstVaccineDate', res.data.first_dose_date);
                    url.searchParams.append('phone', res.data.phone);
                    url.searchParams.append('firstVaccineName', res.data.first_vacine_name);
                    url.searchParams.append('secondVaccineDate', res.data.second_dose_date);
                    url.searchParams.append('secondVaccineName', res.data.second_vacine_name);
                    window.location.href = url;
                }
            })
        }

    })

    $('#nid-vaccine-card').on('submit', function(e) {
        e.preventDefault();
        let otp = $('#nid-otp').val();
        if (otp) {
            $.ajax({
                url: 'https://uno.covidvaccination-brahmanpara.gov.bd/generate-pdf',
                type: 'get',
                data: {
                    otp: otp,
                },
                success: function(res) {
                    url = new URL('https://covidvaccination-brahmanpara.gov.bd/titkaCard.html');
                    url.searchParams.append('subcenter', res.data.subcenter);
                    url.searchParams.append('name', res.data.name);
                    url.searchParams.append('nid', res.data.nid);
                    url.searchParams.append('age', res.data.age);
                    url.searchParams.append('dob', res.data.dob);
                    url.searchParams.append('donner_name', res.data.donner_name);
                    url.searchParams.append('donner_phone', res.data.donner_phone);
                    url.searchParams.append('first_dose_date', res.data.first_dose_date);
                    url.searchParams.append('phone', res.data.phone);
                    url.searchParams.append('first_vacine_name', res.data.first_vacine_name);
                    url.searchParams.append('second_dose_date', res.data.second_dose_date);
                    url.searchParams.append('second_vacine_name', res.data.second_vacine_name);
                    window.location.href = url;
                }
            })
        }

    })
})

// function printDiv() {
//     window.location.href = 'titkaCard.html?name=anis&nid=123456789';
// }