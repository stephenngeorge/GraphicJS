'use strict';

import bgSolid from './functions/bgSolid';
import circle from './functions/circle';
import rect from './functions/rect';

import Circle from './classes/Circle';
import Rect from './classes/Rect';

const library = {
  bgSolid,
  circle,
  rect,
  classes: {
    Circle,
    Rect
  }
}


module.exports = library;
