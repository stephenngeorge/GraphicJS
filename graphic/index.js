'use strict';

import animate from './functions/animate';
import rotate from './functions/rotate';
import canvas from './functions/canvas';
import bgSolid from './functions/bgSolid';
import line from './functions/line';
import segment from './functions/segment';
import circle from './functions/circle';
import rect from './functions/rect';
import triangleR from './functions/triangleR';
import triangleE from './functions/triangleE';
import triangleI from './functions/triangleI';

import Line from './classes/Line';
import Segment from './classes/Segment';
import Circle from './classes/Circle';
import Rect from './classes/Rect';
import TriangleR from './classes/TriangleR';
import TriangleE from './classes/TriangleE';
import TriangleI from './classes/TriangleI';

const library = {
  animate,
  rotate,
  canvas,
  bgSolid,
  line,
  segment,
  circle,
  rect,
  triangleR,
  triangleE,
  triangleI,
  classes: {
    Line,
    Segment,
    Circle,
    Rect,
    TriangleR,
    TriangleE,
    TriangleI
  }
}


module.exports = library;
