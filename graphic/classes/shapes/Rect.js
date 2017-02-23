'use strict';

import Graphic from '../Graphic';

export default class Rect extends Graphic {
  constructor(ctx, x, y, width, height) {
    super();
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
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    return this;
  }
  /* ****
    DATA METHODS
  **** */
  // get area of rectangle
  area() {
    return this.width * this.height;
  }
  // get perimeter of rectangle
  perim() {
    return 2 * (this.width + this.height);
  }
}