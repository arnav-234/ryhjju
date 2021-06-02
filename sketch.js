
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
	ground1 =new Ground(400,655,800,20)
	paper1 = new Paper(200,300,40)
	bin1 = new bin(550,600,10,100)
	bin2= new bin(595,650,100,10)
	bin3 = new bin(640,600,10,100)
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(220);
  ground1.display()
 paper1.display()
bin1.display()
bin2.display()
bin3.display()
keyPressed()
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-60})
     }
}

