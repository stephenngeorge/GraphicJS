'use strict';

import Graphic from '../Graphic';
import vector from '../../functions/vector';

export default class Circle extends Graphic {
  constructor(ctx, x, y, r) {
    super();
    this.ctx = ctx;
    this.pos = vector(x, y);
    this.x = this.pos.x;
    this.y = this.pos.y;
    this.r = r;
    this.vel = vector(1, 1);
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw circle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = fillStyle;
    this.ctx.fill();
    return this;
  }
  // draw circle to canvas with stroke (no fill)
  outline({ weight = 2, colour = '#808080' } = {}) {
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.stroke();
    return this;
  }
  /* ****
    DATA METHODS
  **** */
  // get area of circle
  area() {
    return Math.PI * (this.r * this.r);
  }
  // get circumference of circle
  circumf() {
    return Math.PI * this.r * 2;
  }
}
