  
class Rect {
    constructor(x, y, width, height) {
      var optn = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, optn);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      
      fill("red");
      var pos = this.body.position;
      var angle = this.body.angle;
      push();

      translate(pos.x, pos.y);
      rotate(angle);
      rect( 0, 0, this.width, this.height);
      rectMode(CENTER);   
     
      pop();

    }
  }
  