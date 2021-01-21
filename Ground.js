class Ground{
    constructor(x, y) {
        var options = {
            
            isStatic : true

        }

        this.width = 1500;
        this.height = 20;
        this.body = Bodies.rectangle(x, y,1500,20, options);
        
        World.add(world, this.body);

      }
      display(){
        
        var pos = this.body.position;
        
        push()
        fill("grey");
        rectMode(CENTER);
        rect( pos.x,pos.y,1500,20);
        pop()
        
      }
}