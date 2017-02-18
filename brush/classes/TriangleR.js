'use strict';
// RIGHT-ANGLE TRIANGLE
export default class TraingleR {
  constructor(ctx, xPos, yPos, base, height) {
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
    this.base = base;
    this.height = height;
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw triangle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath();
    this.ctx.moveTo(this.xPos, this.yPos);
    this.ctx.lineTo(this.xPos, this.yPos + this.height);
    this.ctx.lineTo(this.xPos + this.base, this.yPos + this.height);
    this.ctx.fillStyle = fillStyle;
    this.ctx.fill();
    return this;
  }
  // draw triangle to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.xPos, this.yPos);
    this.ctx.lineTo(this.xPos, this.yPos + this.height);
    this.ctx.lineTo(this.xPos + this.base, this.yPos + this.height);
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.closePath();
    this.ctx.stroke();
    return this;
  }
  /* ****
    DATA METHODS
  **** */
  // get the length of the triangle's hypotenuse
  hyp() {
    return Math.sqrt((this.base * this.base) + (this.height * this.height));
  }
}
