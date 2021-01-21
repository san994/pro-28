class Stone{
    constructor(x, y) {
        var options = {
            
            isStatic : false,
            density : 1.2,
            friction : 1,
            restitution : 0

        }

        this.body = Bodies.circle(x, y, 20 , options);
        this.radius = 55;
        this.image = loadImage("stone.png");

        World.add(world, this.body);
      
      }
      display(){
        
       var pos = this.body.position

        //ellipseMode(RADIUS)
        //ellipse(pos.x,pos.y,55,55)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,55,55);
        
      }
}