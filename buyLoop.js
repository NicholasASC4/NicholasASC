

// var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');

var prompt = require('prompt-sync')();

var bank = 1000; //start player with $1000
var items = [];
// console.log("You have 1,000 dollars"); //tell the player...

// var inventory = ['high rule sword', 'potion', 'shield', 'bow'];

// prompt the user if they want to buy an item


// for (var x = 0; x < inventory.length; x++){
// var answer = prompt('Would you like to buy ' + inventory[x] + '?');

// if(answer = 'yes'){
    // bank = bank - 100;
    // console.log("You have " + bank + " remaining");
    // }
// }

while(bank>99){
    console.log('You have $' + bank + ' remaining. Sword = $100 Food = $100 Shield = $100')
    var answer = prompt('What would you like to buy?');
    if(answer === "Sword"){
      bank = bank - 100;
      items.push("Sword");
      console.log("You bought a sword!");
    }else if(answer === "Food"){
      bank = bank - 100;
      items.push("Food");
      console.log("You bought food!");
    }else if(answer === "Shield"){
      bank = bank - 100;
      items.push("Shield");
      console.log("You bough a shield!");
    }else{
        console.log("Invalid answer. Try again.");
    }
  console.log(items);
}
