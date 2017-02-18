'use strict';

import backgroundSolid from './functions/backgroundSolid';
import circle from './functions/circle';
import rect from './functions/rect';

import Circle from './classes/Circle';
import Rect from './classes/Rect';

const library = {
  backgroundSolid,
  circle,
  rect,
  classes: {
    Circle,
    Rect
  }
}


module.exports = library;
