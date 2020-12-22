const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraint;

var ground, stand1, stand2;
var engine, world;
//blocks for stand1
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;


function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400, 590, 800, 20);
    stand1 = new Ground(350,450 , 300, 10);
    stand2 = new Ground(650, 300, 200, 10);

    //blocks for stand 1
    block1 = new BaseClass(660, 270, 10, 50);
    block2 = new BaseClass(650, 270, 10, 50);
    block3 = new BaseClass(640, 270, 10, 50);
    block4 = new BaseClass(630, 270, 10, 50);
    block5 = new BaseClass(670, 270, 10, 50);
    block6 = new BaseClass(680, 270, 10, 50);
    block7 = new BaseClass(690, 270, 10, 50);
     block8 = new BaseClass(655, 220, 10, 50);
     block9 = new BaseClass(645, 220, 10, 50);
     block10 = new BaseClass(635, 220, 10, 50);
     block11 = new BaseClass(665, 220, 10, 50);
     block12 = new BaseClass(675, 220, 10, 50);
     block13 = new BaseClass(685, 220, 10, 50);
     block14 = new BaseClass(660, 170, 10, 50);
     block15 = new BaseClass(650, 170, 10, 50);
     block16 = new BaseClass(670, 170, 10, 50);
    
     //console.log(stand1);
}



function draw() {
    background("pink");
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
}