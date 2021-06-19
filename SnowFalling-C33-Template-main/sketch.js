var backgroundImg
var snowflake
function preload(){
  backgroundImg = loadImage("snow3.jpg")
  snowflake = loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
  snowflake = createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}