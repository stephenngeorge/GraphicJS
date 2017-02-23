'use strict';

import TriangleI from '../../classes/shapes/TriangleI';
// create new right-angled triangle, draw to the given context
export default function triangleI(ctx, xPos = 42, yPos = 42, base = 24, side = 42) {
  return new TriangleI(ctx, xPos, yPos, base, side)
}
