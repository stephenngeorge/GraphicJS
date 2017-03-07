'use strict';

import Graphic from './Graphic';

export default class Vector extends Graphic {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
}
