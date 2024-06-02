var randomNo1=Math.floor(Math.random() * 6) + 1;
var randomNo2=Math.floor(Math.random() * 6) + 1;
var val1="./images/dice"+randomNo1+".png";
var val2="./images/dice"+randomNo2+".png";
document.querySelector(".img1").setAttribute("src",val1);
document.querySelector(".img2").setAttribute("src",val2);
if(randomNo1>randomNo2)
{
    document.querySelector(".container h1").innerHTML="Player 1 wins!!";
}

if(randomNo1<randomNo2)
{
    document.querySelector(".container h1").innerHTML="Player 2 wins!!";
}
if(randomNo1===randomNo2)
{
    document.querySelector(".container h1").innerHTML="Draw!";
}

