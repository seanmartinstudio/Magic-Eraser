let topLayer;
let eraser; 

function preload() {
  eraser = loadImage("eraser.png");
}

function createTopLayer() {
  topLayer = createGraphics(width, height);
  topLayer.background(0);
  topLayer.textSize(50);
  topLayer.textAlign(CENTER);
  topLayer.fill(255);
  topLayer.text("Click to erase me!", width/2, height/2);
  topLayer.strokeWeight(75);
  topLayer.blendMode(REMOVE);
}
function setup() {
  createCanvas(600, 600);
  createTopLayer()
}

function draw() {
  background(255);
  textSize(40);
  textAlign(CENTER);
  textWrap(WORD);
  fill(0);
  text("Have a wonderful day!", width/2, height/2);
  image(eraser, pmouseX, pmouseY, 32, 32)
  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  } 
  //calls the lopLayer to load onto canvas
  image(topLayer, 0, 0);
}
