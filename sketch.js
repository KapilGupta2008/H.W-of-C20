var movingRect, fixedRect,movingRect2, movingRect3;
var Boundry1, Boundry2, Boundry3, Boundry4;


function setup() {
    createCanvas(800, 500);
    fixedRect = createSprite(200, 300, 70, 40);
    fixedRect.shapeColor = "blue";
    fixedRect.velocityX = 2;
    movingRect = createSprite(700, 300, 70, 40);
    movingRect.shapeColor = "orange";
    movingRect.velocityX = -2;
    movingRect2 = createSprite(600, 200, 70, 40);
    movingRect2.shapeColor = "orange";
    movingRect2.velocityX = -2;
    movingRect3 = createSprite(600, 100, 70, 40);
    movingRect3.shapeColor = "orange";
    movingRect3.velocityX = -2;
    Boundry1 = createSprite(500, 490, 1000,1);
    Boundry2 = createSprite(795, 250, 1,1000);
    Boundry3 = createSprite(5, 250, 1,1000);
    Boundry4 = createSprite(500, 10, 1000,1);

}


function draw() {
    background(0);
    

    console.log(movingRect.x - fixedRect.x);

    if (movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2 &&
        fixedRect.x - movingRect.x <= movingRect.width / 2 + fixedRect.width / 2 &&
        movingRect.y - fixedRect.y <= movingRect.height / 2 + fixedRect.height / 2 &&
        fixedRect.y - movingRect.y <= movingRect.height / 2 + fixedRect.height / 2) {
        fixedRect.shapeColor = "White";
        movingRect.shapeColor = "Red";
        fixedRect.velocityX=0;
        movingRect.velocityX=0;
        movingRect2.velocityX=0;
        movingRect3.velocityX=0;

    }
    
    else {
        fixedRect.shapeColor = "purple";
        movingRect.shapeColor = "purple";
    }
    
    if (movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2 &&
        fixedRect.x - movingRect.x <= movingRect.width / 2 + fixedRect.width / 2) {
        fixedRect.velocityX = fixedRect.velocityX * (-1);
        movingRect.velocityX = movingRect.velocityX * (-1);

    }
    if (movingRect.y - fixedRect.y <= movingRect.height / 2 + fixedRect.height / 2 &&
        fixedRect.y - movingRect.y <= movingRect.height / 2 + fixedRect.height / 2) {
        fixedRect.velocityY = fixedRect.velocityY * (-1);
        movingRect.velocityY = movingRect.velocityY * (-1);
    }

    //fixedRect.BounceOff(Boundry2);


    drawSprites();
}

