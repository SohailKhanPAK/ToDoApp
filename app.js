var colors =['green','royalblue','teal','violet','tomato']
var date = document.getElementById('date')
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day= days[d.getDay()];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
month = months[d.getMonth()];
dau_digit= d.getDate();

date.innerHTML=`${day} , ${month} ${dau_digit}`