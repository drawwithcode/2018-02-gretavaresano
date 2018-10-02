function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(40);



}

var inizio = 0;
var a = 200;
var r = 50;

function draw() {
  text('PRESS B\nOUT OF\nTHE BLUE',40, 40);
  textSize(14);
  textFont('helvetica');
  fill(255,255,255);
  strokeWeight(0);
  strokeWeight(1);
var x;
var y;
  a += 0.2;
  r += 0.5;



  translate(width/2,height/2);
  stroke(lerpColor(color(255,255,255,10),color(255,255,255,60),frameCount/600));
  rotate(frameCount*16);





if (frameCount > 0) {
  x = r / sin(a)/15;
  y = r / sin(a)/15;
}
if (frameCount > 72) {
  x = r / sin(a)/12;
  y = r / sin(a)/12;
}
if (frameCount > 144) {
  x = r / sin(a)/9;
  y = r / sin(a)/9;
} if (frameCount > 216) {
  x = r / sin(a)/6;
  y = r / sin(a)/6;
}if (frameCount > 288) {
  x = r / sin(a)/3;
  y = r / sin(a)/3;
} if (frameCount > 360) {
  x = r / sin(a);
  y = r / sin(a);
} if (frameCount > 432) {
  x = r / sin(a)*3;
  y = r / sin(a)*3;
}  if (frameCount > 504) {
  x = r / sin(a)*6;
  y = r / sin(a)*6;
}if (frameCount > 576) {
  x = r / sin(a)*9;
  y = r / sin(a)*9;
} if (frameCount > 648) {
  x = r / sin(a)*12;
  y = r / sin(a)*12;
} if (frameCount > 720) {
  x = r / sin(a)*15;
  y = r / sin(a)*15;
} if (frameCount > 792) {
  x = r / sin(a)*18;
  y = r / sin(a)*18;
//translate(mouseX,mouseY);
} if (frameCount > 792) {
  x = r / sin(a)*18;
  y = r / sin(a)*18;
//translate(mouseX,mouseY);
inizio = 1;
}

if (keyIsPressed && key == 'b') {
stroke(lerpColor(color(0,0,50,10),color(0,0,200,90),frameCount/230));
rotate(frameCount*30);
x = r/ cos(a)*2;
y = r / cos(a)*30;

}



line(-x, -y, -150, 100);




}
