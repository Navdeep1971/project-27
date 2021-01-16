
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var rope1, rope2, rope3, rope4, rope5;   

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    roof = createSprite(200, 100, 250, 30);
	rope1 = createSprite(250, 250, 1.5, 270);
	rope2 = createSprite(210, 250, 1.5, 270);
	rope3 = createSprite(170, 250, 1.5, 270);
	rope4 = createSprite(130, 250, 1.5, 270);
	rope5 = createSprite(290, 250, 1.5, 270);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



