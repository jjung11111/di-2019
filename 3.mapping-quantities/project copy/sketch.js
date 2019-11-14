var data

function preload(){
  data = loadTable('data/nuclear explosions - Sheet1.csv', 'csv', 'header')
}

function setup(){
  createCanvas(800, 600)
  var table = data

  print(table)

  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 100

  textStyle(BOLD)
  textAlign(LEFT)
  
  for (var c=0; c<table.getColumnCount(); c++){
    text(table.columns[c], x, y)
    x += colWidth
  }


}