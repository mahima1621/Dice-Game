var randomNumber1=Math.floor(Math.random()*6)+1;//random number 1-6/
var randomDiceImage="dice"+randomNumber1+".png";//dice image 1-6
var randomImage="images/"+randomDiceImage;//images/dice1-6.png

var image1=document.querySelectorAll("img")[0];//selecting the first dice 
image1.setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImage2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];//selecting second dice
image2.setAttribute("src",randomImage2);

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Match Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
