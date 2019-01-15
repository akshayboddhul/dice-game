var randomNumber1 = (Math.floor(Math.random() * 6) + 1);

var dice1ImagePath = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute('src', dice1ImagePath);


var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);
var dice2ImagePath = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute('src', dice2ImagePath);


if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN";
if(randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN";
if(randomNumber1 === randomNumber2)
    document.querySelector("h1").innerHTML = "DRAW!";

function reload(){
    location.reload();
}
