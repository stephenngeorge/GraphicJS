'use strict';

import TriangleR from '../../classes/shapes/TriangleR';
// create new right-angled triangle, draw to the given context
export default function triangleR(ctx, xPos = 42, yPos = 42, base = 40, height = 30) {
  return new TriangleR(ctx, xPos, yPos, base, height)
}