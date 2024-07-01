window.onload = function() {
    document.getElementById("msg").innerHTML="Rock Paper Scissors";
    document.getElementById("game").style.visibility="visible";
  };
function play(selection){
    var compSelect=Math.floor(Math.random(3)*3);
    const compElmnt=['paper','rock','scissors'];
    var result;
    var opponent=compElmnt[compSelect];
    if(selection==opponent){
        result="Draw!!!";
    }
    else{
        if((selection=="paper" && opponent=="scissors")||
          (selection=="rock" && opponent=="paper")||
          (selection=="scissors" && opponent=="rock")){
            result="Computer Wins!!!";
        }
        else{
            result="You Win!!!";
        }
    }

    sessionStorage.setItem("userChoice", selection);
    sessionStorage.setItem("compChoice", opponent);
    sessionStorage.setItem("result", result);

    window.location.href = "result.html";
}