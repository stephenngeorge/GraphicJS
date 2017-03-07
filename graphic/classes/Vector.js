'use strict';

import Graphic from './Graphic';

export default class Vector extends Graphic {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
}
