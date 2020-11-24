const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops = [];
var maxDrops=100;
var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);
    umbrella_sprite = new Umbrella(200,500);
    if(frameCount % 150 === 0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
}
    
}

function draw(){

    Engine.update(engine);
    background(0); 

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        var thunderCreatedFrame = frameCount;
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 === frameCount){
        thunder.destroy();
    }
    umbrella_sprite.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
        
    }
    drawSprites();
}   

