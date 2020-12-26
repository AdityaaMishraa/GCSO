var car,wall;
var speed,weight;

function setup(){
  createCanvas(1600,400);
  speed=round(random(55,90));
  weight=round(random(400,1500));
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,30,height/2);

  car.shapeColor="white";
  car.velocityX=speed;
}

function draw(){
  background("black");

  var deformation=round(0.5*weight*speed*speed/22500);

  if((wall.x-car.x)<(wall.width/2+car.width/2)){
    car.velocityX=0;
    if(deformation<100){
      car.shapeColor="green";
    }
    if((deformation>100)&&(deformation<180)){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
    textSize(20);
    fill(200);
    text("Weight: "+weight,(width/2)-60,wall.y+150);
    text("Speed: "+speed,(width/2)+80,wall.y+150)
    text("Deformation: "+deformation,(width/2)+200,wall.y+150);
    text("Press 'R' To Run The Test Again",width/2,height/2);
    if(keyDown("r")){
      reset();
    }
  }

  drawSprites();
}

function reset(){
  car.x=50;
  car.shapeColor="white";
  speed=round(random(55,90));
  weight=round(random(400,1500));
  car.velocityX=speed;
}