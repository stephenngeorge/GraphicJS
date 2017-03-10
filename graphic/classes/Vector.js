'use strict';

import Graphic from './Graphic';

export default class Vector extends Graphic {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  // pass in a vector to be added to this
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  // pass in a vector to be subtracted from this
  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
}
