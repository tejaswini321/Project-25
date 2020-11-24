class Box{
    constructor(){
       var options ={
           isStatic:true
       }
       this.box = Bodies.rectangle(700,580,100,100,options);
       this.image = loadImage("dustbin.png");
       this.image.scale = 3;

       World.add(world,this.box);
    }
   
    display(){
       var pos = this.box.position
       imageMode(CENTER);
      // fill("white");
       image(this.image,pos.x,pos.y,150,200);

    }
}