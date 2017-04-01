'use strict';

import Graphic from '../Graphic';
import point from '../../functions/shapes/point';

export default class LineGraph extends Graphic {
  constructor(ctx, m, c, mode) {
    super();
    this.ctx = ctx;
    this.m = m;
    this.c = c;
    this.mode = mode;
  }

  calc() {
    let width = this.ctx.canvas.width, height = this.ctx.canvas.height;
    let minX = this.mode === 'cartesian' ? -width * .5 : 0;
    let maxX = this.mode === 'cartesian' ? width * .5 : width;
    for (let i = minX; i < maxX; i++) {
      let y = (this.m * i) + this.c;
      point(this.ctx, i, y).draw();
    }
    return this;
  }
}
