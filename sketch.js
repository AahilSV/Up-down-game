var Player
function setup() {
  createCanvas(1300,500);
  Player = createSprite(300,300,20,20);
}

function draw() 
{
  background("Blue");
  drawSprites ();
  if (keyDown("right")) {
  Player.x = Player.x+5
  }
  if (keyDown("left")) {
    Player.x = Player.x-5
  }
  if(keyDown("Up")) {
    Player.y = Player.y-5
  }
  if(keyDown("Down")) {
    Player.y = Player.y+5
  }
}




