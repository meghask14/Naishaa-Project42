class Drops{
constructor(x,y,r){
    var options={
        friction: 0.001,
        restitution:0.1   
    }
    this.r=r
    this.body= Bodies.circle(x,y,this.r,options)
    World.add(world, this.body)
}
display(){
    //if(frameCount % 10 === 0){
      //var pos = this.body.position;
      //push();
      //translate(pos.x, pos.y);
      //noStroke();
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y, this.r, this.r);
      //pop();
    }
abc(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
    }
}
}