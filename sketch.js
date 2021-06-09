const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(200,100);
    rubber = new Rubber(200, 200, 50);
    stone = new Stone(200, 250);
    stone2 = new Stone(250, 250);
    stone3 = new Stone(300, 250);
    stone4 = new Stone(400, 250);
    stone5 = new Stone(25, 250);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
}