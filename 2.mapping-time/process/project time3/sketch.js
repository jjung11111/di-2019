
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)
  angleMode(DEGREES);


}

function draw() {
  background(0);

  
  
  translate(200, 200);
  rotate(-90);
  var now = clock();

  let hr = now.hours;
  let mn = now.min;
  let sc = now.sec;

  if(now.pm == 12){
    background(255);
  }

  // strokeWeight(8);
  // stroke(255, 50, 150);
  // noFill();
  noStroke();

  fill(200, 100, 100);
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);

  fill(100, 200, 100);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 200, 200, 0, end2);

  fill(100, 100, 200);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 100, 100, 0, end3);

  
}

