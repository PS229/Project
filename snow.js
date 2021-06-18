class Flakes {
    constructor(x,y,width,height) {
        var options = {
            friction:0.04,
            density:1
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x
        this.y = y
        this.widht = width
        this.height = height
        this.image = loadImage("snow4.webp")

        World.add(world,this.body)
    }
    dipslay() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(this.x,this.y)
        rotate(angle)
        this.image(this.image,0,0,this.width,this.height)
        pop()
    }
}