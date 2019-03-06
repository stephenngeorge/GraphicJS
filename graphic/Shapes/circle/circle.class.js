import Shape from '../Shape.class'

export default class Circle extends Shape {
  constructor(ctx, x, y, r) {
    super(x, y)
    this.ctx = ctx
    this.r = r
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw circle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath()
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill()
    return this
  }
  // draw circle to canvas with stroke (no fill)
  outline({ weight = 2, colour = '#808080' } = {}) {
    this.ctx.beginPath()
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2)
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.stroke()
    return this
  }
  /* ****
    DATA METHODS
  **** */
  // get area of circle
  _area() {
    return Math.PI * (this.r * this.r)
  }
  // get circumference of circle
  _circumf() {
    return Math.PI * this.r * 2
  }
}