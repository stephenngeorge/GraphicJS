'use strict';

export default class Circle {
  constructor(ctx, x, y, r) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw({lineWidth = 2, strokeStyle = 'grey', fillStyle = 'pink'} = {}) {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = fillStyle;
    this.ctx.fill();
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.stroke();
    return this;
  }
}
