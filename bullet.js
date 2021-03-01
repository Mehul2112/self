class Bullet{
    constructor(x, y, radius, color, velocity ){
        var options = {
            isStatic: false
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity =  velocity;
        World.add(world,this.body)
    }

    display(){
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.radius,this.radius);

        console.log("I am getting called!!")
    }
}