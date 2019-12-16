var numCharge

function preload() {
  numCharge = loadTable("data/percentage of EV - Sheet1.csv", "csv", "header");

}

function setup() {
  // createCanvas(1500, 1000, SVG);
  createCanvas(1500, 2000);
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
    text(numCharge.getString(i, 0), i * 100 + 120, 930);
    text(numCharge.getString(i, 0), i * 100 + 120, 1530);
    text("Number of EV", 120, 530);
    text("Percentages of EV", 120, 1230);
    //numbers
    print(numCharge.getRow(i))
    var barCharge = numCharge.getNum(i, 3);
    //graph
    noStroke();
    var axisHeight = 900
    let barheight = map(barCharge, 0, 500, 0, axisHeight)
    

  
    rect(i * 100 + 100, axisHeight - barheight, 70, barheight)

  }
  for (var o = 0; o < numberOfRows; o++) {
    // years
    // text(numCharge.getString(o, 0), i * 100 + 120, 1630);
    //numbers
    print(numCharge.getRow(o))
    var barCharge = numCharge.getNum(o, 1);
    //graph
    // Stroke();
    var axisHeight = 1500
    let barheight = map(barCharge, 0, 10, 0, axisHeight)
    

  
    rect(o * 100 + 100, axisHeight - barheight, 70, barheight)

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

  //  maxValue= Max(barCharge);
  // for (var k=0;k<maxValue;k=k+50){
  //   text(k, 10, 600-k);
  // }

