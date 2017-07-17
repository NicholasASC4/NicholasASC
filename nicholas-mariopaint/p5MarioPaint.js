

function setup(){
    createCanvas(1400, 1400);
}

function mouseDragged(){
    fill(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255))//makes random colors (R,G,B)
   // rect(mouseX, mouseY, 20, 20)//makes rectagle
    ellipse(mouseX, mouseY, random([5],[100]), random([5],[100]));   //make random sized circles
    return false;
}