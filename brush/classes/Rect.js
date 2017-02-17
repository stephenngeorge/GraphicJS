'use strict';

import rect from '../functions/rect';

export default class Rect {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(fillStyle = 'pink') {
    this.ctx.fillStyle = fillStyle;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  outline(weight = 2, colour = 'grey') {
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    return this;
  }
}
