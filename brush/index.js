'use strict';

import bgSolid from './functions/bgSolid';
import line from './functions/line';
import circle from './functions/circle';
import rect from './functions/rect';
import triangleR from './functions/triangleR';

import Line from './classes/Line';
import Circle from './classes/Circle';
import Rect from './classes/Rect';
import TriangleR from './classes/TriangleR';

const library = {
  bgSolid,
  line,
  circle,
  rect,
  triangleR,
  classes: {
    Line,
    Circle,
    Rect,
    TriangleR
  }
}


module.exports = library;
