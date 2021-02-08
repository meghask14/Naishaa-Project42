class umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.image = loadImage("images/Walking Frame/walking_1.png")
    this.r=r
    this.body = Bodies.circle(x,y,this.r,options)
    
    
    World.add ( world, this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}