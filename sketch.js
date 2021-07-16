var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 3;

  ghost = createSprite(200,200);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.5;
  
  doorgroup=new Group();
}

function draw() {
  background(200);
if(gameState==="play"){


  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("space")){
      ghost.velocityY=-5;
    }
ghost.velocityY=ghost.velocityY+0.8;

if(keyDown("LEFT_ARROW") ){
ghost.x=ghost.x-2;
}

if(keyDown("RIGHT_ARROW") ){
  ghost.x=ghost.x+2;

  }
  if(ghost.isTouching(doorgroup)){
    ghost.destroy();
    
    
    gameState="end";
  }
  spawnDoor()
}
if(gameState==="end"){
  tower.velocityY=0
  doorgroup.setVelocityYEach(0);
  textSize(30);
   fill ("yellow")
  text ("GAMEOVER",200,200);
  tower.visible=false;
  doorgroup.visible=false;
  
}
    drawSprites()
}

function spawnDoor(){
  if(frameCount%160===0){
    var door=createSprite(200,-50);
    door.addImage(doorImg);
    door.velocityY=+3;
    door.x=Math.round(random(100,400))
    doorgroup.add(door)
    door.lifetime=300;
  }



}