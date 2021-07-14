
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea1 = createSprite(20,20,10,10)
  sea1.addImage(seaImg);
  ship1 = createSprite(20,20,10,10)
  ship1.addAnimation(shipImg1)
}

function draw() {
  background("blue");
 if(sea1.x < 0){
   sea1.x = sea.width/2;
 }


}