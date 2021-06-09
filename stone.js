class Stone{
  constructor(x,y){
      var options={
        'restitution':0.8,
        'friction': 0.9,
        'density':12
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 25;
      this.height = 25;
      World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2);
    stroke('black')
    fill('red')
    rectMode(CENTER)
    ellipse(0, 0, this.width, this.height);
    pop();
  };
};
