'use strict';

export default class Graphic {
  cartesian(quadrant = 0) {
    let canvasHeight = this.ctx.canvas.clientHeight;
    let canvasWidth = this.ctx.canvas.clientWidth;
    switch (quadrant) {
      case 0:
        this.ctx.translate(canvasWidth * .5, canvasHeight * .5);
        break;
      case 1:
        this.ctx.translate(0, canvasHeight);
        break;
      case 2:
        this.ctx.translate(canvasWidth, canvasHeight);
        break;
      case 3:
        this.ctx.translate(canvasWidth, 0);
        break;
      case 4:
        break;
      default: console.log({
        status: 'ERROR',
        message: 'invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info'
      })
    }
    this.ctx.transform(1, 0, 0, -1, 0, 0);
    return this;
  }
}
