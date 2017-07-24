
var value = ''
 
 
  function setup(){
    createCanvas(1400, 1400);
    fill('red');
    ellipse(100, 100, 100, 100);
    fill("green");
    rect(215, 50, 100, 100);
    fill("blue");
    rect(375, 75, 100, 50);
}

function mousePressed(){
  if (value == 'red'){
    function mouseDragged(){
    fill('red')
    ellipse(mouseX, mouseY, 100, 100);  
    return false;
}
  }
  return false;
}
