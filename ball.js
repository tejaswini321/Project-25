class Ball{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1.2,
            density:1.2
        }
        this.body = Bodies.circle(100,670,60,options);
        this.image = loadImage("paper.png"); 
        this.image.scale = 0;
        

        World.add(world,this.body);
    }
     display(){
        var pos = this.body.position
      
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,50);
     }
}
