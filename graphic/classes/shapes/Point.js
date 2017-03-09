'use strict';

import Graphic from '../Graphic';
import Vector from '../Vector';

import circle from '../../functions/shapes/circle';

export default class Point extends Graphic {
  constructor(ctx, x, y) {
    super();
    this.ctx = ctx;
    this.pos = new Vector(x, y);
    this.x = this.pos.x;
    this.y = this.pos.y;
    this.vel = new Vector(1, 1);
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
