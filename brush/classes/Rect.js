'use strict';

export default class Rect {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /* ****
    DESIGN METHODS
  **** */
  // draw rectangle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.fillStyle = fillStyle;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }
  // draw rectangle to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.strokeRect(this.x - (weight / 2), this.y - (weight / 2), this.width + weight, this.height + weight);
    return this;
  }

  /* ****
    DATA METHODS
  **** */
  // get area of rectangle
  area() {
    return this.width * this.height;
  }
  perim() {
    return 2 * (this.width + this.height);
  }
}
