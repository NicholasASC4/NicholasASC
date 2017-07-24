var myScore = 0
var myWords = ''


function setup(){
    createCanvas(1000, 1000)
    background('black')
}

function draw(){
   fill('white');
   textSize(50);
   text('Please type the sentence below', 50, 50);
   fill('white');
   textSize(50);
   text('a', 50, 200);
   fill('white');
   textSize(50);
   text('Current points ' + myScore, 50, 550 );
}



function keyTyped(){
    if(key === 'a'){
        myScore = myScore + 10;
    } else if (key != 'a'){
        myScore = 0
    }
    
}


// var value = 0;
// function draw() {
//   fill(value);
//   rect(25, 25, 50, 50);
// }
// function keyTyped() {
//   if (key === 'a') {
//     value = 255;
//   } else if (key === 'b') {
//     value = 0;
//   }
//   // uncomment to prevent any default behavior
//   // return false;
// }