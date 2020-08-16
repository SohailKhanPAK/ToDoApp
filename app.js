var colors = ['green','royalblue','teal','violet','tomato','aquamarine','cadetblue']
var date = document.getElementById('date')
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day= days[d.getDay()];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
month = months[d.getMonth()];
dau_digit= d.getDate();``

date.innerHTML=`${day} , ${month} ${dau_digit}`

var content = document.getElementById('content')
var textField = document.getElementById('textField')
var n =0;
function toDo(){
   if (textField.value!=""){
       var key = firebase.database().ref('user').push().key
       var objects = {
           text : textField.value,
           key:key
       }
      firebase.database().ref('user/'+key).set(objects)
      textField.value=''
    }
}
receiveData = () => {
    firebase.database().ref('user').on('child_added',function(data){
        content.innerHTML+=`

        <div class="row content1 ${colors[n]}">
        
            <div class="col-2 col-sm-1 mt-3 circle-icon">
                <i onclick="chkItem(this)" class="fa fa-circle-thin fa-big" aria-hidden="true"></i>
            </div>
        
            <div class="col-8 col-sm-10 mt-3   text">
                <p id="text">${data.val().text}</p>
            </div>
        
            <div class="col-2 col-sm-1 mt-3   trash-icon">
                <i id = ${data.val().key} onclick="deleteItem(this)" class="fa fa-trash-o fa-big"  aria-hidden="true"></i>
            </div>
        </div>
        
        `
        if (n>3) {
            n=-1
          }
          n++
    })

}

receiveData()
function deleteItem(e){
    firebase.database().ref('user/'+e.id).remove()
    e.parentNode.parentNode.remove()
}

removeAll = () =>{
    firebase.database().ref('user/').remove()
    content.innerHTML=""
}
chkItem = (v) =>{

v.parentNode.nextSibling.nextSibling.firstChild.nextSibling.setAttribute('class','line')
v.parentNode.innerHTML= '<i class="fa fa-check-circle" onclick="unChk(this)" aria-hidden="true"></i>'
}

unChk = (f) =>{
    f.parentNode.nextSibling.nextSibling.firstChild.nextSibling.removeAttribute('class')
    f.parentNode.innerHTML= '<i onclick="chkItem(this)" class="fa fa-circle-thin fa-big" aria-hidden="true"></i>'
}

// }

console.log(firebase)