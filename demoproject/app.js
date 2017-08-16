var database = firebase.database().ref();

function updateDB(){
    var name = $("#name").val();
    var score = points;
    console.log(name + " : " + score);

    var value = {
        NAME: name,
        SCORE: score
    }
    database.push(value)
}

var points = 0;

function setup(){

    
    $('#score').html(points);

    $('#logo').hide();
    $('.breaddd').hide();
    $('.Search').hide();
    $('#bar').hide();

    var words = ["cat", "dog", "rat", "mouse", "hamster","summer","stall","throughput","operator","darling","whale","bell","water","boat","beach"]

    var random = words[Math.floor(Math.random() * 15)];

    var sounding = new Audio('audio/none.mp3');

    $('#start').click(function(){
        $('#firstJumbo').css("padding-bottom", "130px");
        $('#firstJumbo').css("padding-top", "20px");
        $('#particles-js').css("height", "100vh");

        $('#logo').show();

        $('#bar').show();

        $('.breaddd').show();

        $('#wordran').html(random);

        if (random === "cat") {
            $('#defini').html("Definition: a small domesticated carnivorous mammal with soft fur, a short snout and retractile claws. Normally kept as a pet.");
            $('#pronounce').html("Pronunciation: /kat/");
            sounding = new Audio('audio/cat.mp3');
        }
        if (random === "dog") {
            $('#defini').html("Definition: a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.");
            $('#pronounce').html("Pronunciation: /dog/");
            sounding = new Audio('audio/dog.mp3');
        }
        if (random === "hamster") {
            $('#defini').html("Definition: a solitary burrowing rodent with a short tail and large cheek pouches for carrying food, native to Europe and northern Asia.");
            $('#pronounce').html("Pronunciation: /hamster/");
            sounding = new Audio('audio/hamster.mp3');
        }
        if (random === 'mouse') {
            $('#defini').html("Definition: a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.");
            $('#pronounce').html("Pronunciation: /mous/");
            sounding = new Audio('audio/mouse.mp3');

        } if (random === "rat") {
            $('#defini').html("Definition: a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail. Some kinds have become cosmopolitan and are sometimes responsible for transmitting diseases.");
            $('#pronounce').html("Pronunciation: /rat/");
            sounding = new Audio('audio/rat.mp3')
        }
        if (random === "summer") {
            $('#defini').html("Definition: the warmest season of the year, in the northern hemisphere from June to August and in the southern hemisphere from December to February.");
            $('#pronounce').html("Pronunciation: /sumer/");
            sounding = new Audio('audio/summer.mp3')
        }
        if (random === "stall") {
            $('#defini').html("Definition: a stand, booth, or compartment for the sale of goods in a market or large covered area.");
            $('#pronounce').html("Pronunciation: /stal/");
            sounding = new Audio('audio/stall.mp3')
        }
        if (random === "throughput") {
            $('#defini').html("Definition: the amount of material or items passing through a system or process.");
            $('#pronounce').html("Pronunciation: /THroo,poot/");
            sounding = new Audio('audio/throughput.mp3')
        }
        if (random === "operator") {
            $('#defini').html("Definition: a person who operates equipment or a machine.");
            $('#pronounce').html("Pronunciation: /aperater/");
            sounding = new Audio('audio/operator.mp3')
        }
        if (random === "darling") {
            $('#defini').html("Definition: used as an affectionate form of address to a beloved person.");
            $('#pronounce').html("Pronunciation: /darrliNG/");
            sounding = new Audio('audio/darling.mp3')
        }
        if (random === "whale") {
            $('#defini').html("Definition: a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.");
            $('#pronounce').html("Pronunciation: /hweyl/");
            sounding = new Audio('audio/whale.mp3')
        }
        if (random === "bell") {
            $('#defini').html("Definition: a hollow instrument of cast metal, typically cup-shaped with a flaring mouth, suspended from the vertex and rung by the strokes of a clapper, hammer, or the like.");
            $('#pronounce').html("Pronunciation: /bel/");
            sounding = new Audio('audio/bell.mp3')
        }
        if (random === "water") {
            $('#defini').html("Definition: a transparent, odorless, tasteless liquid, a compound of hydrogen and oxygen, H2O, freezing at 32 degrees F or 0 degrees C and boiling at 212 degrees F or 100 degrees C, that in a more or less impure state constitutes rain, oceans, lakes, rivers, etc.");
            $('#pronounce').html("Pronunciation: /waw-ter/");
            sounding = new Audio('audio/water.mp3')
        }
        if (random === "boat") {
            $('#defini').html("Definition: a vessel for transport by water, constructed to provide buoyancy by excluding water and shaped to give stability and permit propulsion.");
            $('#pronounce').html("Pronunciation: /boht/");
            sounding = new Audio('audio/boat.mp3')
        }
        if (random === "beach") {
            $('#defini').html("Definition: the part of the shore of an ocean, sea, large river, lake, etc., washed by the tide or waves.");
            $('#pronounce').html("Pronunciation: /beech/");
            sounding = new Audio('audio/beach.mp3')
        }

        $('#start').hide();
    });


    $('#practice').click(function(){
        $('#wordran').hide();
        $('#pronounce').empty();
        $('.Search').show();
        $('#attempt').show();
        $('#practice').hide();
        $('#new').hide();
        $("#userInput").show();
    })

    $('#new').click(function () {
        random = words[Math.floor(Math.random() * 15)];
        console.log(random);

        $('#wordran').html(random);
        $('#wordran').show();
        $('#practice').show();

        if (random === "cat") {
            $('#defini').html("Definition: a small domesticated carnivorous mammal with soft fur, a short snout and retractile claws. Normally kept as a pet.");
            $('#pronounce').html("Pronunciation: /kat/");
            sounding = new Audio('audio/cat.mp3');
        }
        if (random === "dog") {
            $('#defini').html("Definition: a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.");
            $('#pronounce').html("Pronunciation: /dog/");
            sounding = new Audio('audio/dog.mp3');
        }
        if (random === "hamster") {
            $('#defini').html("Definition: a solitary burrowing rodent with a short tail and large cheek pouches for carrying food, native to Europe and northern Asia.");
            $('#pronounce').html("Pronunciation: /hamster/");
            sounding = new Audio('audio/hamster.mp3');
        }
        if (random === 'mouse') {
            $('#defini').html("Definition: a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.");
            $('#pronounce').html("Pronunciation: /mous/");
            sounding = new Audio('audio/mouse.mp3');

        } if (random === "rat") {
            $('#defini').html("Definition: a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail. Some kinds have become cosmopolitan and are sometimes responsible for transmitting diseases.");
            $('#pronounce').html("Pronunciation: /rat/");
            sounding = new Audio('audio/rat.mp3')
        }
        if (random === "summer") {
            $('#defini').html("Definition: the warmest season of the year, in the northern hemisphere from June to August and in the southern hemisphere from December to February.");
            $('#pronounce').html("Pronunciation: /sumer/");
            sounding = new Audio('audio/summer.mp3')
        }
        if (random === "stall") {
            $('#defini').html("Definition: a stand, booth, or compartment for the sale of goods in a market or large covered area.");
            $('#pronounce').html("Pronunciation: /stal/");
            sounding = new Audio('audio/stall.mp3')
        }
        if (random === "throughput") {
            $('#defini').html("Definition: the amount of material or items passing through a system or process.");
            $('#pronounce').html("Pronunciation: /THroo,poot/");
            sounding = new Audio('audio/throughput.mp3')
        }
        if (random === "operator") {
            $('#defini').html("Definition: a person who operates equipment or a machine.");
            $('#pronounce').html("Pronunciation: /aperater/");
            sounding = new Audio('audio/operator.mp3')
        }
        if (random === "darling") {
            $('#defini').html("Definition: used as an affectionate form of address to a beloved person.");
            $('#pronounce').html("Pronunciation: /darrliNG/");
            sounding = new Audio('audio/darling.mp3')
        }
        if (random === "whale") {
            $('#defini').html("Definition: a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.");
            $('#pronounce').html("Pronunciation: /hweyl/");
            sounding = new Audio('audio/whale.mp3')
        }
        if (random === "bell") {
            $('#defini').html("Definition: a hollow instrument of cast metal, typically cup-shaped with a flaring mouth, suspended from the vertex and rung by the strokes of a clapper, hammer, or the like.");
            $('#pronounce').html("Pronunciation: /bel/");
            sounding = new Audio('audio/bell.mp3')
        }
        if (random === "water") {
            $('#defini').html("Definition: a transparent, odorless, tasteless liquid, a compound of hydrogen and oxygen, H2O, freezing at 32 degrees F or 0 degrees C and boiling at 212 degrees F or 100 degrees C, that in a more or less impure state constitutes rain, oceans, lakes, rivers, etc.");
            $('#pronounce').html("Pronunciation: /waw-ter/");
            sounding = new Audio('audio/water.mp3')
        }
        if (random === "boat") {
            $('#defini').html("Definition: a vessel for transport by water, constructed to provide buoyancy by excluding water and shaped to give stability and permit propulsion.");
            $('#pronounce').html("Pronunciation: /boht/");
            sounding = new Audio('audio/boat.mp3')
        }
        if (random === "beach") {
            $('#defini').html("Definition: the part of the shore of an ocean, sea, large river, lake, etc., washed by the tide or waves.");
            $('#pronounce').html("Pronunciation: /beech/");
            sounding = new Audio('audio/beach.mp3')
        }

        $('.Search').hide();
    })

    // checks user input on click button or submit
    $('#attempt').click(function () {
        var userInput = document.getElementById("userInput").value;

        console.log(userInput);
        console.log(random);

        if(userInput === random){
            console.log("YOU GOT POINTS BOII")
            points = points + 10;
            $('#score').html(points);
            $('#attempt').hide();
            $('#new').show();
            $("#userInput").hide();
        }else{
            console.log("YOU AINT GOT NO POINTS BOII")
            points = points - 5;
            $('#score').html(points);
        }
        userInput = '';

    });


    $('#audio').click(function(){
        sounding.play();
    })

}



$(document).ready(setup);


