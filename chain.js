class Chain{
    constructor(log,box1,box2,box3,box4,box5){
    var options = {bodyA:bird.body,bodyB:log6.body,stiffness:0.05,length:10}
    this.chain = Constraint.create(options);
    World.add (world,this.chain);
    }
    display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}