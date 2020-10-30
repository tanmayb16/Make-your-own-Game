var background, background_image;
var INTRO = 0, PLAY = 1, END = 2;
var gameState = INTRO;
var player, player_Image;
var wall, wall_Image;
var wall1, wall1_Image;
function preload(){
  background_image = loadImage("images/background.jpg");
  player_Image = loadImage("images/player.png");
  wall_Image = loadImage("images/wall.png");
  wall1_Image = loadImage("images/wall1.png");
}

function setup() {
  createCanvas(400,600);
  background = createSprite(width/2,height/2);
  background.addImage(background_image);
  background.velocityY = -2; 

  player = createSprite(50,550);
  player.addImage(player_Image);
  
}

function draw(){
  drawSprites();
  if(gameState === INTRO){
    background.velocityY = 0;
    fill("white")
    textSize(25)
    text("Press Space Key to PLAY",50,300);

    textSize(40)
    text("CORONA - GO",50,100)
    
    textSize(25)
    fill("blue")
  //  stroke(4)
    text("Don't Touch Coronavirus",50,400)
    fill("yellow")
    stroke(4)
    text("Use Arrow Keys to Move",50,500)
    if(keyCode === 32){
      gameState = PLAY;
    }
  }
  if(gameState === PLAY){
    background.velocityY = 5;
    if(background.y > 1600){
     // background.y = background.height/2;
     background.y = 0
    }
    if(frameCount % 50 === 0){
      wall = createSprite(315,0)
      wall.addImage(wall_Image);
      wall.velocityY = 5;
    }
    if(frameCount % 75 === 0){
      wall1 = createSprite(85,0)
      wall1.addImage(wall1_Image);
      wall1.velocityY = 5;
    }
    
   // console.log(frameCount)
   // console.log(background.y);
  }

  
}
