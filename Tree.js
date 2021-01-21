class Tree{
    constructor(x, y, width,height ) {
        var options = {
            
            static : true

        }

        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width
        this.height = height
        
        this.image = loadImage("tree.png");

        World.add(world, this.body);

      }
      display(){
        
        var pos = this.body.position

        //rectMode(CENTER)
        imageMode(CENTER);
        //rect(pos.x,pos.y,50,50);
        image(this.image,700,300,this.width,this.height);
        
      }
}