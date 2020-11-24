
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;
var ground;
var ball;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    
    box = new Box();
    ball = new Ball();
    ground = new Ground();
  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background("white");
  Engine.update(engine);
  

  box.display();
  ground.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:400,y:-1000});
  }
}



