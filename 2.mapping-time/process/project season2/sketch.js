
function setup() {
  
  // set the width & height of the sketch
  createCanvas(400, 400)
  frameRate(5)

//   // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you

}

function draw() {
  background('white')
//   // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  // var seccc = now.weekday
  
// var distri = map(seccc, 0, 4, 0, 200)
//   // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
//   // note that settivar r = random(0, 400)

var r = random(50, 350)
var t = random(50, 350)

var hourwidth = width/12
var dayheight = height/31

var monmove = map(now.month -1, 0, 12, 0, 400);

  noStroke();

  if (now.season == 1) {
    fill('red');
ellipse(r, t, 50, 50)
  }
  else if(now.season == 2) {
    fill('blue');
    rect(r, t, 50, 50)
  }
  if (now.season == 3) {
    fill('orange');
triangle(r, t, r + 60, t, r + 60, t - 60)
  }
  else if(now.season == 4) {
    fill('purple');
    quad(r, t, r + 50, t, r, t + 60, r + 50, t + 60)
  }

 

  stroke(1);
  fill(100, 50 ,50);
  for (var i=0; i<now.month; i++){
    rect(i*hourwidth + 12, 0, 3, 400)
  }

  fill(100, 50, 150);
  for (var i=0; i<now.day; i++){
    ellipse( 14 + monmove, i*dayheight + 5, 10)
  }

}