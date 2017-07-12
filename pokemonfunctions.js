function rand(num){
var randNum = Math.random()*num;
var result = Math.floor(randNum);
return result;
}

var myLetter = ['A', 'B','C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']

console.log("Your letter is " + myLetter[rand(25)])
