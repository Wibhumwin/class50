var canvas;
var ball, player, goal, ballImg, playerImg, goalImg, background, backgroundImg;

function preload() {
    backgroundImg = loadImage("/images/background.png");
    ballImg = loadImage("/images/ball.png");
    playerImg = loadImage("/images/player.png");
    goalImg = loadImage("/images/goal.png");
}

function setup() {
    createCanvas(1500,600);

    player = createSprite(300,400,10,20)
    player.addImage("player", playerImg)
    player.scale = 1.3;
    
    ball = createSprite(350,500,10,10);
    ball.addImage("ball", ballImg)
    ball.scale = 0.3;

    goal = createSprite(1200,400,10,20);
    goal.addImage("goal", goalImg)
    goal.scale = 0.6;

}

function draw() {
    background(backgroundImg);

    drawSprites();
}