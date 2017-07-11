var myPokemonRoster = ['dragonite' , 'pikachu' , 'snorlax' , 'mew' , 'eevee'];

var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];


myPokemonRoster.pop();


myPokemonRoster.push('mewtwo', 'squirtle');

myPokemonRoster.length;

var rosterLenth = myPokemonRoster.length;


for (var i=0 ; i<myPokemonRoster.length ; i++) {
    console.log(myPokemonRoster[i]);
}

if (myPokemonRoster.length < 5) {
    greeting = "You can't play! You don't have enough pokemon";
}