
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1_options ={
	restitution:0.7
	
  
   }
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	block1 = Bodies.circle(220,10,10,block1_options)
    World.add(world,block1)
 
    block1 = Bodies.rectangle(110,50,10,10,block2_options)
	World.add(world,block2)
	
	block3 = Bodies.rectangle(350,50,10,10,block3_options)
	World.add(world,block2)

    plane = Bodies.rectangle(200,390,400,10,plane_options)
	World.add(world,plane)
	var plane_options={
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  engine.update(engine)
  drawSprites();
  var plane_options={
    isStatic =true
	}
 var block1_options ={
  restitution:0.7
  friction:0.01
  frictionAir:0.1
 }
 var block2_options ={
  restitution:0.5
  friction:0.03
  frictionAir:0.2

 }
 var block3_options ={
  restitution:0.2
  friction:0.01
  frictionAir:0.3	
 }
}



