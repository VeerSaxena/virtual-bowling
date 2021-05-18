class Ball{
    constructor(x, y){
        //JSON Format
        var options = {
            'density': 1.5,
            'friction': 1,
            'restitution': 0.5
        }
        this.body = Matter.Bodies.rectangle(x, y, 50, 50, [options]);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/ball.png");
        World.add (world, this.body);

  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      pos.y = mouseY;
      pos.x  = mouseX;
      push ();
      translate (pos.x , pos.y);
      rotate (angle);
      rectMode (CENTER);
      fill ("red");
      image (this.image, 0, 0, this.width, this.height);
      pop ();
  }
}