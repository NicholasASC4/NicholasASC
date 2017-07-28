
var playerHp=100;
var playerGold=100;
var playersDefeated=0;
var imgheight=200;
var imgwidth=300;






function setup(){
$('body').append("<h1>hello</h1>");
$('body').append("hp: " + playerHp + " gold: " +playerGold + " defeated: " + playersDefeated);
$('body').append("<img src=https://unsplash.it/"+ imgheight "/300>")

}

$(document).ready(setup);