
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  
   var hr = hour();
   var mn = minute();
   var sc = second();

  strokeWeight(8);
  stroke(255,50 , 15);
  noFill();
  var  secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(255, 250, 0);
  var minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(0, 5, 255);
  var hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 50, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(255, 250,0);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0, 5, 255);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);


}