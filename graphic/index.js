'use strict';

import animate from './functions/Structure/animate';
import rotate from './functions/Structure/rotate';
import aside from './functions/Structure/aside';
import canvas from './functions/Structure/canvas';
import map from './functions/Helpers/map';
import convert from './functions/Helpers/convert';
import bgSolid from './functions/backgrounds/bgSolid';
import vector from './functions/vector';
import line from './functions/shapes/line';
import point from './functions/shapes/point';
import sector from './functions/shapes/sector';
import segment from './functions/shapes/segment';
import circle from './functions/shapes/circle';
import rect from './functions/shapes/rect';
import triangleR from './functions/shapes/triangleR';
import triangleE from './functions/shapes/triangleE';
import triangleI from './functions/shapes/triangleI';
import bezier from './functions/shapes/bezier';
import curve from './functions/shapes/curve';

import Graphic from './classes/Graphic';
import Vector from './classes/Vector';
import Line from './classes/shapes/Line';
import Point from './classes/shapes/Point';
import Sector from './classes/shapes/Sector';
import Segment from './classes/shapes/Segment';
import Circle from './classes/shapes/Circle';
import Rect from './classes/shapes/Rect';
import TriangleR from './classes/shapes/TriangleR';
import TriangleE from './classes/shapes/TriangleE';
import TriangleI from './classes/shapes/TriangleI';
import Bezier from './classes/shapes/Bezier';
import Curve from './classes/shapes/Curve';

const library = {
  animate,
  rotate,
  aside,
  map,
  convert,
  canvas,
  bgSolid,
  vector,
  line,
  point,
  sector,
  segment,
  circle,
  rect,
  triangleR,
  triangleE,
  triangleI,
  bezier,
  curve,
  classes: {
    Graphic,
    Vector,
    Line,
    Point,
    Sector,
    Segment,
    Circle,
    Rect,
    TriangleR,
    TriangleE,
    TriangleI,
    Bezier,
    Curve
  }
}


module.exports = library;
