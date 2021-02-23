var d = new Date();
document.getElementById('date').innerHTML = d;
confirm("do have the free time?")
var color=prompt("enter your fav color, let me help getting a good mood, ps do not pick black")
function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground(color) });

var guess=prompt("guess the devlopers name")
if(guess=="issa"){
    
    document.getElementById('s').innerHTML = "GOOD guess the developer is issa";
} else{
    document.getElementById('s').innerHTML = "Wrong gues the developer name again";
}

var year=prompt("enter the year you were born");
if(year>1998){
    alert("to young go play")
}else{
    alert("greate time to be a developer")
}