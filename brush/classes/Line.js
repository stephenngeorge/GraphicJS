'use strict';

export default class Line {
  constructor(ctx, xFrom, yFrom, xTo, yTo) {
    this.ctx = ctx;
    this.xFrom = xFrom;
    this.yFrom = yFrom;
    this.xTo = xTo;
    this.yTo = yTo;
  }

  /* ****
    DESIGN METHODS
  **** */
  // draw line to canvas
  draw({weight = 2, colour = '#808080'} = {}) {
    this.ctx.beginPath();
    this.ctx.lineWidth = weight;
    this.ctx.moveTo(this.xFrom, this.yFrom);
    this.ctx.lineTo(this.xTo, this.yTo);
    this.ctx.strokeStyle = colour;
    this.ctx.stroke();
    return this;
  }

  /* ****
    DATA METHODS
  **** */
  // get length of line (function is called 'dist()' as 'length' is a reserved word in JS)
  dist() {
    let xDiff = Math.abs(this.xFrom - this.xTo);
    let yDiff = Math.abs(this.yFrom - this.yTo);
    let lineSqr = (xDiff * xDiff) + (yDiff * yDiff);
    return Math.sqrt(lineSqr);
  }
}
