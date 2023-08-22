function rollDice(){
    var diceValue = Math.floor(Math.random() * 6) + 1;
    showDots(diceValue);
}

function showDots(value){
    var dots = document.getElementsByClassName("dot");

    for(var i = 0; i < dots.length; i++){
        dots[1].style.display = "none";

    }

    document.getElementById("dot" + value).style.display = "block";
}