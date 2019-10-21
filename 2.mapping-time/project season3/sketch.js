let angle = 0;

function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  
  rectMode(CENTER);
  background(0);
  push();
  var now = clock();
  var sc = now.month;
  var seasonn = now. season;

  let sasn = map(seasonn, 0, 4, 0, 300);

  noStroke();
  if(now.season == 1){
    fill(50, 150, 0)
  
  }else if(now.season == 2){
    fill(150, 50, 0)
  }else if(now.season == 3){
    fill(0, 50, 150)
  }else if(now.season == 4){
    fill(255)
  }
    
  circle(width/2, height/2, sasn)





translate(200, 200);
rotate(angle);

fill(255,100, 150);
let sccc = map(sc, 0, 12, 0, 360);
rect(0, 0, 150, 30);
pop();

angle = sccc





}