const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(200,100,200,2)
    hammer = new Hammer(10,100);
iron = new Iron (300,350)
stone = new Stone (600,500,100,100)
  rubber = new Rubber (200,300,30)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   plane.display();
    hammer.display();
iron.display () ;
rubber.display () ;
stone.display () ;
 
}