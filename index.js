var randomNumber1 = Math. floor(Math. random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";
// dicel .png
var randomlmageSource="images/" + randomDiceImage; // images/dåcel .png
var imagel = document.querySelectorAll("img")[0];
imagel.setAttribute("src",randomlmageSource) ;
var randomNumber2 = Math. floor(Math. random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber2 + ".png";
// dicel .png
var randomlmageSource="images/" + randomDiceImage; // images/dåcel .png
var imagel = document.querySelectorAll("img")[1];
imagel.setAttribute("src",randomlmageSource) ;
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins🍛";
    document.querySelector("h1").style.fontSize="50px";
    //alert("All the best Player1");
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 wins\u{1F362}";
    document.querySelector("h1").style.fontSize="50px";
    //alert("All the best Player2");
}
else if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML="Tied.. Refresh Me";
    document.querySelector("h1").style.fontSize="50px";
    document.querySelector("h1").style.color="magenta"
}