const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world

var bg,snowflake
var snowA

function preload() {
  bg = loadImage("snow2.jpg")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  snowA = []
  
}

function draw() {
  Engine.update(engine)

  background(bg);  
  
  if (frameCount % 60 === 0) {
    snowA.push(new Flakes(random(width/2-10,width/2+10), 10,10))
  }

  for (var j = 0; j < snowA.length; j++) {
    snowA[j].display();
  }

}