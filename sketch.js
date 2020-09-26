var box1,box2 




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box1 =  createSprite (150,150,30,40)
  box2 =  createSprite (250,150,30,40)
  box1.shapeColor = "red"
  box2.shapeColor = "blue"
}

function draw() {
  background("green");  
 box1.x=World.mouseX
 box1.y=World.mouseY

  if (box1.x-box2.x < box2.width/2 + box1.width/2 && 
    box2.x-box1.x < box2.width/2 + box1.width/2 &&
    box1.y-box2.y < box2.height/2 + box1.height/2 &&
    box2.y-box1.y < box2.height/2 + box1.height/2){
 box1.shapeColor = "yellow" 
 box2.shapeColor = "yellow"
 }

 else {
  box1.shapeColor = "red"
  box2.shapeColor = "blue"
}
  drawSprites();
}