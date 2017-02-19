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
  grad() {
    let xDiff = Math.abs(this.xFrom - this.xTo);
    let yDiff = Math.abs(this.yFrom - this.yTo);
    return yDiff / xDiff;
  }
  xAngle(mode = 'rad') {
    let units = mode.toUpperCase();
    let slope = this.grad();
    if (units === 'RAD' || units === 'R' || units === 'RADIANS') {
      return Math.atan(slope);
    }
    else if (units === 'DEG' || units === 'D' || units === 'DEGREES') {
      let radians = Math.atan(slope);
      return radians * (180 / Math.PI);
    }
    else {
      return {
        status: 'ERROR',
        message: 'the mode you have selected is not recognised, please specify "deg" or "rad"'
      }
    }
  }
}
