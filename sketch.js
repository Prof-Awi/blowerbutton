var button
var ball
var blower 
var blowerMouth
var world
var engine

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  button = createButton("Click to Blow");
  button.position(width/2, height-100);
  button.mousePressed(blow);
  ball = new Ball(width/2 + 100,height/2-100,80,80)
  blower = new Blower(width/2-50,height/2+50,150,20)
  blowerMouth = new Blowermouth(width/2 + 70,height/2+20,100,80)



}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine)
  ball.show()
  blower.show()
  blowerMouth.show()

}


function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}