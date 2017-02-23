'use strict';

import TriangleE from '../../classes/shapes/TriangleE';
// create new right-angled triangle, draw to the given context
export default function triangleE(ctx, xPos = 42, yPos = 42, side = 42) {
  return new TriangleE(ctx, xPos, yPos, side)
}
