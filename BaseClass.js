class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
          
          rotate(angle);
          //translate(this.body.position.x, this.body.position.y);
          fill("blue");
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}