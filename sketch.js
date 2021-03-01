const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.body;

var	world, engine, player;
var ground;


function setup(){
	createCanvas(displayWidth, displayHeight);	
	engine = Engine.create();
	world = engine.world;

    var player_options = {isStatic: false}; 
	var ground_opts = {isStatic: true}; 

	player = Bodies.circle(displayWidth/2, displayHeight/2, 50, player_options);
	ground = Bodies.rectangle(displayWidth/2, displayHeight-200,displayWidth,20,ground_opts);

	World.add(world, player);
	World.add(world, ground);

	console.log(player)

}

function draw(){
	background("white");
	Engine.update(engine);

	fill("blue")
	ellipseMode(RADIUS);
	ellipse(player.position.x, player.position.y, 50, 50);

	fill("brown")
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y, displayWidth,20);

}

function keyPressed(){

	if (keyCode === 68){
		Matter.Body.applyForce(player.body, {x:5, y:5})
	}
}

