const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bottle1, pig1;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20)

    bottle1 = new Bottle(700, 260, 70, 70);
    bottle2 = new Bottle(920, 260, 70, 70);
    bottle3 = new Bottle(700, 240, 70, 70);
    bottle4 = new Bottle(920, 240, 70, 70);
    bottle5 = new Bottle(810, 260, 70, 70);

    ball = new Ball(100, 100);

}

function draw() {
    background(0);
    Engine.update(engine);
    console.log(bottle1.density);
    console.log(bottle2.body.position.y);
    console.log(bottle2.body.angle);
    bottle1.display();
    bottle2.display();
    ground.display();

    bottle3.display();
    bottle4.display();

    bottle5.display();

    ball.display();
}