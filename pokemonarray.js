var myPokemonRoster = ['dragonite' , 'pikachu' , 'snorlax' , 'mew' , 'eevee'];

var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];


myPokemonRoster.pop();


myPokemonRoster.push('mewtwo', 'squirtle');
myPokemonRoster.pop()
myPokemonRoster.pop()


myPokemonRoster.length;

var rosterLenth = myPokemonRoster.length;
console.log(myPokemonRoster.length)

if (myPokemonRoster.length < 5) {
    greeting = "You can't play! You don't have enough pokemon";
}
for (var i=0 ; i<myPokemonRoster.length ; i++) {
    console.log(myPokemonRoster[i]);
}

