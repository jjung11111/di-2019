var stockfiles
var nukestate

function preload() {
  stockfiles = loadTable("data/global nuclear - Sheet1.csv", "csv", "header");
  // nukestate = loadTable("data/nuclear states - Sheet1.csv", "csv", "header");
}

function setup() {
  // createCanvas(3000, 2000, SVG);
  createCanvas(3000, 2000);
  numberOfRows = stockfiles.getRowCount();
  numberOfColumns = stockfiles.getColumnCount();

  // numberOfRows2 = nukestate.getRowCount();
  noLoop()

}

function draw() {
  background(220);
  fill(0);
  
  for (var i = 0; i < numberOfRows; i++) {
    // years
    text(stockfiles.getString(i, 0), i * 20 + 10, 1680);
    //numbers
    print(stockfiles.getRow(i))
    var numBombs = stockfiles.getNum(i, 1);
    var numState = stockfiles.getNum(i, 2);
    //graph
    noStroke();
    var axisHeight = 500
    let barheight = map(numBombs, 0, 65000, 0, axisHeight)
    let statecol = map(numState, 0, 9, 50, 200)

    fill(statecol);
    rect(i * 20 + 10, axisHeight - barheight, 15, barheight)

  }
// save('statenuke.svg')
// for (var c = 0; c < numberOfRows2; c++) {
//   fill('red');
//   var stateNums = nukestate.getNum(c, 1);
//   ellipseMode(CENTER)
//   // graph
//   var axisHeight2 = 300
//     let barheight2 = map(stateNums, 0, 10, 0, axisHeight2)
//   circle(c * 20 + 17, axisHeight2 - barheight2 + 210, 20)
//   // stroke('red');
//   // line (i * 20 + 17, 1200 - nukestate[c], (c) * 20 + 17, 1680-nukestate[c])
}


// // value set

  //  maxValue=max(stockfiles);
  // for (var k=0;k<maxValue;k=k+500){
  //   text(k,10,1680-k);
  // }

//   maxValue2=max(nukestate);
//   for (var l=0;l<maxValue2;l=l+10){
//     text(l,10,1680-l);
//   }

