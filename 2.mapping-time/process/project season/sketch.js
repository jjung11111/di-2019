
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')


var seasonn = now.season

// fill('red')
// rect(0, 0, width*seasonn, height)

var monthwidth = width/12


if(now.season == 1){
  fill('red')
  rect(0, 0, 100, 400)

}else if(now.season == 2){
  fill('purple')
  rect(100, 0, 100, 400)
}else if(now.season == 3){
  fill('blue')
  rect(200, 0, 100, 400)
}else if(now.season == 4){
  fill('orange')
  rect(300, 0, 100, 400)
}

line(width/2, 0, width/2, 400)
line(width/4, 0, width/4, 400)
line(300, 0, 300, 400)

strokeWeight(2);
fill('white')
for (var i=0; i<now.month; i++){
  circle(i*monthwidth + 17, height/2, 20)
}


// circle(width/2, height/2, 50, now.moon)






}

