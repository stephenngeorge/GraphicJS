import Graphic from '../Graphic'
import Vector from '../Globals/vector/vector.class'

export default class Shape extends Graphic {
    constructor(posx, posy, velx, vely, accx, accy) {
        super()
        this.pos = new Vector(posx, posy)
        this.vel = new Vector(velx, vely)
        this.acc = new Vector(accx, accy)
    }

    move() {
        this.vel = this.vel.add(acc)
        this.pos = this.pos.add(vel)
        return this
    }
}