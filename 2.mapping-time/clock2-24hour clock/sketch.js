function coordsAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return [cx+cos(theta) * dist, 
          cy+sin(theta) * dist]
}

function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}


function setup() {
  createCanvas(400, 400);
  background(120)

  print('starting time:', clock())
  
  // draw the largest circle in the center
  circle(200,200, 20)  
  
}
  
function draw() {
    background(255)

    var now = clock();

  
    
    noStroke();
    fill(0)
    rect(0, 0, 200, 400)
    



let sc = now.sec;


circle(width/2, height/2, 10);


var hourAngle = map(now.hours, 0, 24, 0, 360);
var minAngle = map(now.min, 0, 60, 0, 360);
var secwidth = width/60
var secheight = height/60

var secc = map(now.sec, 0, 60, 0, 150);

// var dist = map(now.progress.min, 0, 1, 0, 150)
//start from the center and goes to dot

var secLocation = pointAt(width/2, height/2, hourAngle - 90, 150);
// // var otherLocation = pointAt(secLocation.x, secLocation.y, secAngle, 30)
var minLocation = pointAt(width/2, height/2, minAngle - 90, secc);

var dayy = map(now.day, 0, 31, 0, 110)


if(now.hours < 13){
  fill('blue')
  }else{
    fill('red');
  }
  circle(secLocation.x, secLocation.y, 10);

stroke(200, 0, 100);
// if(now.min <31){
//   stroke(0, 100, 200);
// }

strokeWeight(6);

line(width/2, height/2, minLocation.x, minLocation.y);

noStroke();
circle(secLocation.x, secLocation.y, dayy);




// for (var i=0; i<now.sec; i++){
//   stroke(0)
//   strokeWeight(1);
//   noFill();
//   ellipse(i*secwith, i*secheight, secwidth - 10);
}
