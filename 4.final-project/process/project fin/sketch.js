var numCharge

function preload() {
  numCharge = loadTable("data/number of charging station - Sheet1.csv", "csv", "header");

}

function setup() {
  // createCanvas(1500, 1000, SVG);
  createCanvas(1500, 1000);
  numberOfRows = numCharge.getRowCount();
  numberOfColumns = numCharge.getColumnCount();

  // numberOfRows2 = nukestate.getRowCount();
  noLoop()

}

function draw() {
  background(250);
  fill(0);
  
  for (var i = 0; i < numberOfRows; i++) {
    // years
    text(numCharge.getString(i, 0), i * 20 + 10, 600);
    //numbers
    print(numCharge.getRow(i))
    var barCharge = numCharge.getNum(i, 1);
    //graph
    noStroke();
    var axisHeight = 1000
    let barheight = map(barCharge, 0, 65000, 0, axisHeight)
    // let statecol = map(numState, 0, 9, 50, 200)

    // fill(statecol);
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

