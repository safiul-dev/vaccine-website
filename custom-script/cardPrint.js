const url_string = window.location.href;
var url = new URL(url_string);
document.getElementById('identify_id').value = url.searchParams.get('nid');
document.getElementById('name').value = url.searchParams.get('name');
document.getElementById('dob').value = url.searchParams.get('dob');
document.getElementById('phone').value = url.searchParams.get('phone');
document.getElementById('subcenter').value = url.searchParams.get('subcenter');
document.getElementById('donner_name').value = url.searchParams.get('donner_name');
document.getElementById('donner_phone').value = url.searchParams.get('donner_phone');
document.getElementById('1st-dose-date').innerText = url.searchParams.get('first_dose_date');
document.getElementById('1st-dose-sign').innerText = url.searchParams.get('first_dose_sign');
document.getElementById('2nd-dose-date').innerText = url.searchParams.get('second_dose_date');
document.getElementById('2nd-dose-sign').innerText = url.searchParams.get('second_dose_sign');
document.getElementById('vaccine-name1').innerText = url.searchParams.get('first_vacine_name');
document.getElementById('vaccine-name2').innerText = url.searchParams.get('second_vacine_name');
// window.print()
// window.onafterprint = back;

// function back() {
//     window.history.back();
// }