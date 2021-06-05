var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage("apple.png")
  leafimg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  applefall();
 leaf();
  drawSprites();
}
function applefall(){
  if(frameCount%60===0){
    var apple=createSprite(Math.round(random(50,350)),0)
    apple.addImage(appleimg)
    apple.scale=0.05
    apple.velocityY=3
  }
}
function leaf(){
  if(frameCount%80===0){
    var leaf=createSprite(Math.round(random(10,300)),0)
    leaf.addImage(leafimg)
    leaf.scale=0.1
    leaf.velocityY=3
  }
}