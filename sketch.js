let topLayer;
let eraser; 

function preload() {
  eraser = loadImage("eraser.png");
}

function createTopLayer() {
  topLayer = createGraphics(windowWidth, windowHeight);
  topLayer.background(0);
  topLayer.textSize(50);
  topLayer.textAlign(CENTER);
  topLayer.fill(255);
  topLayer.text("Click to erase me!", windowWidth/2, windowHeight/2);
  topLayer.strokeWeight(75);
  topLayer.blendMode(REMOVE);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  createTopLayer()
}

function draw() {
  background(255);
  textSize(40);
  textAlign(CENTER);
  textWrap(WORD);
  fill(0);
  text("Have a wonderful day!", windowWidth/2, windowHeight/2);
  image(eraser, pmouseX, pmouseY, 32, 32)
  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  } 
  //calls the lopLayer to load onto canvas
  image(topLayer, 0, 0);
}
