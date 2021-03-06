var player_box, ground, background1;
var player_boxImage, groundImage, backgroundImage;

function preload(){
  groundImage = loadImage("ground.png");
  bgImage = loadImage("bg.png")
}

function setup(){
  createCanvas(1200,700)
 
  background1 = createSprite(600,350)
  background1.addImage(bgImage);
  background1.scale = 1
 

  ground = createSprite(600,500)
  ground.scale = 0.7
  ground.velocityX = -7
  ground.addImage(groundImage);
  ground.x = ground.width/2;
 
}

function draw(){
  background("white")
  if(ground.x < 0){
  ground.x = ground.width/2
}
  drawSprites()
}
