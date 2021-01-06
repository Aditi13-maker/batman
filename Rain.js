class Rain{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:1.0,
            density:0.3
            
        }
   
        this.r=r
        this.body=Bodies.circle(x,y,this.r/2,options)
       
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke()
        fill("blue");
        ellipse(0, 0, 15);
        pop();
      }
    




}