
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
	box3 = new Box(700,320,70,70);
    box4 = new Box(920,320,70,70);
	box5 = new Box(700,320,70,70);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  log.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  

  
  drawSprites();
 
}



