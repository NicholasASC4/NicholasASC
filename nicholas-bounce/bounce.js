var x = 0; //starting x coord
var y = 0; //starting y coord
var xspeed = 3;
var yspeed = 5;
var posx = 200;
var posy = 485;



function setup(){
    createCanvas(500, 500); 
    background(100, 13, 100);  
    textSize(50);
}

function draw(){
setup();
    if(keyIsDown(RIGHT_ARROW)){
        posx += 5;
    }
    if(keyIsDown(LEFT_ARROW)){
        posx -= 5;
    }
    if(x + 10 >= 500){
        xspeed = -3;
    }else if(x <= 0){
        xspeed = 3;
    }else if(y <= 0){
        yspeed = 5
    }else if(y > 500){
        text('Game Over!', 100, 250)
    }else if(y >= posy){
        yspeed = -5
    }
    x+=xspeed;
    y+=yspeed;
    fill('black');
    ellipse(x, y, 10, 10)
    fill('white')
    rect(posx, posy, 100, 10)
     
}

// function keyTyped(){
//     if (key === 'd'){
//         posx = posx + 20
//     }else if(key === 'a'){
//         posx = posx - 20
//     }
// }

