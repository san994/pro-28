class Mango{
    constructor(x, y) {

        var options = {
            
            isStatic : true,
            friction : 1,
            restitution:0.5


        }

        this.body = Bodies.circle(x, y,20, options);
        this.radius = 60;
        
        this.image = loadImage("mango.png");

        World.add(world, this.body);

      }
      display(){
        
        var pos = this.body.position
        //ellipseMode(RADIUS);
         imageMode(CENTER);
        image(this.image, pos.x,pos.y,60,60);
        //ellipse(pos.x,pos.y,60,60)
        
      }
      
}