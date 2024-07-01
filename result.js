var userChoice = sessionStorage.getItem("userChoice");
var compChoice = sessionStorage.getItem("compChoice");
var result = sessionStorage.getItem("result");

var imgUser = "./images/"+userChoice+"1.png";
var imgComp = "./images/"+compChoice+"1.png";

document.getElementById("res").innerHTML = result;
document.getElementsByClassName("userImg")[0].src=imgUser;
document.getElementsByClassName("compImg")[0].src=imgComp;

function no(){
    document.getElementById("res").style.visibility="visible";
    document.getElementById("res").innerHTML="Thanks for playing. See you soon!";
    document.getElementById("result").style.visibility="hidden";
}
function yess(){
    document.getElementById("res").style.visibility="hidden";
    window.location.href = "index.html";
}