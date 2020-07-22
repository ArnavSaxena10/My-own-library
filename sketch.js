var movingRect, fixedRect, fixedRect1, rect1, rect2;

function setup() {
  createCanvas(1200,600);
  
movingRect = createSprite(600,300,100,100);
fixedRect = createSprite(200,500,60,60);
fixedRect1 = createSprite(800,300,50,50);
rect1 = createSprite(600,100,60,60);
rect2 = createSprite(600,500,30,30);
rect1.velocityY = 3;
rect2.velocityY = -2;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor='green';
    fixedRect.shapeColor='purple';
  }

  if(isTouching(movingRect,fixedRect1)){
    //movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "pink";
  }

  else{
    //movingRect.shapeColor='green';
    fixedRect1.shapeColor='yellow';
  }

bounceOff1(rect1, rect2);
  
  drawSprites();
}

