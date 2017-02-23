'use strict';

import Line from '../../classes/shapes/Line';
// create new line, draw to the given context
export default function line(ctx, xFrom = 42, yFrom = 42, xTo = 126, yTo = 42) {
  return new Line(ctx, xFrom, yFrom, xTo, yTo);
}
