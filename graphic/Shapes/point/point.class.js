import Shape from '../Shape.class'

import circle from '../circle/circle'

export default class Point extends Shape {
  constructor(ctx, x, y) {
    super(x, y)
    this.ctx = ctx
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw point (1 pixel of colour)
  draw(colour = '#808080') {
    this.ctx.fillStyle = colour
    this.ctx.fillRect(this.pos.x, this.pos.y, 1, 1)
    return this
  }
  // help show location point by drawing small circle around it
  spotlight(colour = 'rgba(255, 255, 255, .5)') {
    circle(this.ctx, this.pos.x, this.pos.y, 4).outline({weight: 1, colour})
    return this
  }
}