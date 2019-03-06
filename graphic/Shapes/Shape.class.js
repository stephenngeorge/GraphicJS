import Graphic from '../Graphic'
import Vector from '../Globals/vector/vector.class'

export default class Shape extends Graphic {
    constructor(posx = 42, posy = 42, velx = 0, vely = 0, accx = 0, accy = 0) {
        super()
        this.pos = new Vector(posx, posy)
        this.vel = new Vector(velx, vely)
        this.acc = new Vector(accx, accy)
    }

    move() {
        this.vel = this.vel.add(this.acc)
        this.pos = this.pos.add(this.vel)
        return this
    }
}