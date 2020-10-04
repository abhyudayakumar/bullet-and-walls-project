var Car,Wall;
var Speed,Weight;

function setup() {
  createCanvas(800,400);

  Speed = random(55,90)
  Weight = random(400,1500)

  Car = createSprite(50,200,50,50)
  Car.velocityX = speed;
  Car.shapeColor = (255)

  Wall = createSprite(1500,200,60,height/2)
  Wall.shapeColor = (80,80,80)
  
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  

  drawSprites();
}