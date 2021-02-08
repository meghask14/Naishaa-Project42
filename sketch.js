const Engine = Matter.Engine;
const World= Matter.World;
 //Events = Matter.Events,
const Bodies = Matter.Bodies;
var engine, world, drops=[];
var maxDrops=100;
var i1, i2, i3, i4, thunder ;
var num;
var thunderCreatedFrame=0;

function preload(){
    i1=loadImage("images/thunderbolt/1.png")
    i2=loadImage("images/thunderbolt/2.png")
    i3=loadImage("images/thunderbolt/3.png")
    i4=loadImage("images/thunderbolt/4.png")
}

function setup(){
   createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;
   Umbrella=new umbrella(150,350,10)
   if(frameCount % 150 === 0){
   for (var i=0; i<maxDrops;i++){
    drops.push (new Drops(random(0,400), random(0,400),5))
}
   }
}

function draw(){
    Engine.update(engine);
    background(0)
   num=Math.round(random(1,4))
    if(frameCount%50=== 0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370), random(10,30),50,50)
        thunder.lifetime=10
       
        switch(num){
            case 1: thunder.addImage(i1)
            break;
            case 2: thunder.addImage(i2)
            break;
            case 3: thunder.addImage(i3)
            break;
            case 4: thunder.addImage(i4)
            break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    Umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].abc()
        
    }
   // drops.display();
   // drops.abc();
    drawSprites();
}   

