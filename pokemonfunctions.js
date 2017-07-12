function rand(num){
var randNum = Math.random()*num; //assign random number to randNum
var result = Math.floor(randNum); //setting result equal to a whole number
return result;
}

var myLetter = ['A', 'B','C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']

// console.log("Your letter is " + myLetter[rand(25)])

var myString = "";

for (i = 0; i < rand(10); i++){
   myString = myString + (myLetter[rand(25)]);
}

console.log(myString);

function randWord(){
    for (i = 0; i < rand(10); i++){
   myString = myString + (myLetter[rand(25)]) 
}
console.log(myString);
return myString;
}

// randWord();
// randWord();


function randSentence(){
    var mySentence = ""
    for (i = 0 ; i < 5; i++){
       mySentence = mySentence + randWord() + ". ";
    }
    console.log(mySentence);
}

randSentence();