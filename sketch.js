var car, wall;
var speed, weight;
var damage;


function setup() {
  createCanvas(1500,400);

 speed = random(55, 90);
 weight = random(400, 1500);

 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white"
 
  wall = createSprite(1350, 200, 60, height/2);
  wall.shapeColor = "white"

  damage = (0.5 * weight * speed * speed) / 22500;
  
}

function draw() {
  background(0); 
  
 car.velocityX = speed;

 if(car.isTouching(wall)){
  car.velocityX = 0;
 }

 if(damage < 100){
  car.shapeColor = "green";
 }

 if(damage > 100 && damage < 180){
  car.shapeColor = "yellow";
 }

 if(damage > 180){
  car.shapeColor = "red";
 }

 
  drawSprites();
}