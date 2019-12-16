
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  background(250)
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  // var secb = map(now.sec, 0, 60, 0, width);
  // var spacing = 5;
var secwidth = width/60
var hourwidth = width/12

noStroke();

fill('red')
for (var i=0; i<now.sec; i++){
  rect(i*secwidth + 3, height - 70, 5, 70)
}

fill('purple')
for (var i=0; i<now.min; i++){
  rect(i*secwidth + 3, height - 160, 9, 70)
}

fill('blue')
for (var i=0; i<now.hour; i++){
  rect(i*hourwidth + 3, height - 250, 60, 70)
}


  // secb = secb + spacing;
  // fill('blue');
  // rect(secb, 245, 11, 70);
  
}