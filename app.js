var colors =['green','royalblue','teal','violet','tomato']
var date = document.getElementById('date')
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day= days[d.getDay()];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
month = months[d.getMonth()];
dau_digit= d.getDate();

date.innerHTML=`${day} , ${month} ${dau_digit}`


var content = document.getElementById('content')
var textField = document.getElementById('textField')
var n =0;
function toDo(){
   if (textField.value!=""){
content.innerHTML+=`

<div class="row content1 ${colors[n]}">

    <div class="col-2 col-sm-1 mt-3 circle-icon">
        <i class="fa fa-circle-thin fa-big" aria-hidden="true"></i>
    </div>

    <div class="col-8 col-sm-10 mt-3   text">
        <p id="text">${textField.value}</p>
    </div>

    <div class="col-2 col-sm-1 mt-3   trash-icon">
        <i class="fa fa-trash-o fa-big"  aria-hidden="true"></i>
    </div>
</div>

`

textField.value=""
n++
if (n>5) {
  n=0
}

   }
}


refresh = () =>{

    content.innerHTML=""
}