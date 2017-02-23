'use strict';

import animate from './functions/Globals/animate';
import rotate from './functions/Globals/rotate';
import canvas from './functions/Globals/canvas';
import bgSolid from './functions/backgrounds/bgSolid';
import line from './functions/shapes/line';
import point from './functions/shapes/point';
import segment from './functions/shapes/segment';
import circle from './functions/shapes/circle';
import rect from './functions/shapes/rect';
import triangleR from './functions/shapes/triangleR';
import triangleE from './functions/shapes/triangleE';
import triangleI from './functions/shapes/triangleI';

import Graphic from './classes/Graphic';
import Line from './classes/shapes/Line';
import Point from './classes/shapes/Point';
import Segment from './classes/shapes/Segment';
import Circle from './classes/shapes/Circle';
import Rect from './classes/shapes/Rect';
import TriangleR from './classes/shapes/TriangleR';
import TriangleE from './classes/shapes/TriangleE';
import TriangleI from './classes/shapes/TriangleI';

const library = {
  animate,
  rotate,
  canvas,
  bgSolid,
  line,
  point,
  segment,
  circle,
  rect,
  triangleR,
  triangleE,
  triangleI,
  classes: {
    Graphic,
    Line,
    Point,
    Segment,
    Circle,
    Rect,
    TriangleR,
    TriangleE,
    TriangleI
  }
}


module.exports = library;
