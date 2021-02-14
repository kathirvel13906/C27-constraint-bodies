class String {
    constructor(bodyA,bodyB) {
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            length: 50,
            stiffness: 0.07
        }

        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display() {
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;

        fill("blue")
        strokeWeight(2);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}