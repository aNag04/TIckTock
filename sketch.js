var hr,min,sec;
var secAngle, minAngle, hrAngle;
var map, map2;
var d;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
    hr = hour();
    min = minute();
    sec = second();
    d = diameter();

    secAngle = map(sec,0,60,360);

function draw() {
  background(0);
  angleMode(DEGREES);
  background(255,255,255);  
  map = map(mouseX,0,width,0,175);
  map2 = map(mouseX,0,width,40,300);
  fill(255,map,0);
  ellipse(width/2,height/2,d,d)

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  arc(50, 55, 50, 50, 0, HALF_PI);
  stroke("GREEN")
  strokeWeight(2)
  arc(50, 55, 60, 60, HALF_PI, PI);
  stroke("ORANGE")
  strokeWeight(2)
  arc(50, 55, 70, 70, PI, PI + QUATER_PI)
  stroke("BLUE")
  strokeWeight(2)
  arc(50, 55, 80, 80, PI + QUATER_PI, TWO_PI)
  stroke("YELLOW")
  strokeWeight(2)
  

  drawSprites();
};
