'use strict';

import Graphic from '../Graphic';

import circle from '../../functions/shapes/circle';

export default class Point extends Graphic {
  constructor(ctx, x, y) {
    super();
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw point (1 pixel of colour)
  draw(colour = '#808080') {
    this.ctx.fillStyle = colour;
    this.ctx.fillRect(this.x, this.y, 1, 1);
    return this;
  }
  // help show location point by drawing small circle around it
  spotlight(colour = 'rgba(255, 255, 255, .5)') {
    circle(this.ctx, this.x, this.y, 4).outline({weight: 1, colour});
    return this;
  }
}
