'use strict';

export default class TraingleR {
  constructor(ctx, xPos, yPos, base, height) {
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
    this.base = base;
    this.height = height;
  }

  draw(fillStyle = '#808080') {
    this.ctx.beginPath();
    this.ctx.moveTo(this.xPos, this.yPos);
    this.ctx.lineTo(this.xPos, this.yPos + this.height);
    this.ctx.lineTo(this.xPos + this.base, this.yPos + this.height);
    this.ctx.fillStyle = fillStyle;
    this.ctx.fill();
  }

  // outline...
}
