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

  draw(fillStyle = '#FFC0CB') {
    this.ctx.fillStyle = fillStyle;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.lineWidth = weight;
    this.ctx.strokeStyle = colour;
    this.ctx.strokeRect(this.x - (weight / 2), this.y - (weight / 2), this.width + weight, this.height + weight);
    return this;
  }
}
