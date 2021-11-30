var flappybird;
var sflappybird;
var pipe1;
var pipe2;
var p1;
var p2;
var chances = 3;
var score = 0;
var gamestate = "play";
var poles;

function preload() {
  flappybird = loadImage("flappy bird.png");
  pipe1 = loadImage("pipes1.png");
  pipe2 = loadImage("pipes2.png");
}

function setup() {
  createCanvas(400, 400);

  sflappybird = createSprite(200, 200, 50, 50);
  sflappybird.addImage(flappybird);
  sflappybird.scale = 0.3;

  poles = createGroup()
  
}

function draw() {
  background("lightblue");
  stroke("black");
  text("Chances = " + chances, 50, 50);
  stroke("black");
  text("Score = " + score, 50, 70);

  if (gamestate == "play") {
    makepipe1();
    makepipe2();

    if (keyWentDown("space")) {
      sflappybird.velocityY = -2;
    }
  
    if (keyWentUp("space")) {
      sflappybird.velocityY = 2;
    }

    if (sflappybird.isTouching(poles)){
      chances = chances - 1 
      poles.destroyEach()
    }

    if (chances == 0){
      gamestate = 'end'
    }

    score = score + 1
  }

  if (gamestate == "end") {
    poles.destroyEach()
    sflappybird.x = 200
    sflappybird.y = 200
    textSize(30)
    stroke('black')
    text("Game is Over." , 125, 250)
  }
  
  drawSprites();
}

function makepipe1() {
  if (frameCount % 50 == 0) {
    var r = Math.round(random(-10, 50));
    p1 = createSprite(400, r);
    p1.addImage(pipe1);

    p1.velocityX = -5;
    p1.scale = 0.5;

    poles.add(p1)
  }
}

function makepipe2() {
  if (frameCount % 50 == 0) {
    var r = Math.round(random(400, 410));
    p2 = createSprite(400, r);
    p2.addImage(pipe2);

    p2.velocityX = -5;
    p2.scale = 0.5;

    poles.add(p2)
  }
}
