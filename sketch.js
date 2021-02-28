var ship , ship_moving
var sea
var seaImage

function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png") ; 
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,200,300)
   sea.addImage(seaImage)
  sea.scale=0.5
  ship=createSprite(200,100,150,100);
  ship.addAnimation("moving",ship_moving)
  ship.scale=0.5
  sea.velocityX=-5
}

function draw() {
  background("blue");
  
  if(sea.x<0){
  sea.x=sea.width/8 ; 
  }
  drawSprites();
 
}