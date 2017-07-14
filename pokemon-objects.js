var myPokeRoster = [];

function Pokemon(name, type, HP, def, atk, lgnd){
  this.name = name;
  this.type = type;
  this.HP = HP;
  this.def = def;
  this.atk = atk;
  this.lgnd = lgnd;
}


var mew = new Pokemon("mew", "psychic", 400, 328, 328, true)

var snorlax = new Pokemon("snorlax", "normal", 524, 251, 350, false)

var articuno = new Pokemon("articuno", ["ice", "flying"], 384, 328, 295, true)

var dragonite = new Pokemon("dragonite", ["dragon", "flying"], 386, 317, 403, false)

var moltres = new Pokemon("moltres", ["fire", "flying"], 384, 306, 328, true)

var flareon = new Pokemon("flareon", "fire", 334, 240, 394, false)

myPokeRoster.push(mew, snorlax, articuno, dragonite, moltres, flareon)

console.log(myPokeRoster)

