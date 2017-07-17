function setup(){
    createCanvas(300,300);
    background('blue')
    strokeWeight(10)
    fill('red')
    ellipse(150, 150, 250, 250);
    strokeWeight(10);
    fill('white');
    arc(150, 150, 250, 250, 0, PI, CHORD);
    fill('white');
    ellipse(150, 150, 80, 80);
    fill('black')
    ellipse(150, 150, 30, 30)

}