'use strict';

import Rect from '../classes/Rect.js';
// create new rectangle, draw to the given context
export default function rect(ctx, xPos = 42, yPos = 42, width = 42, height = 42) {
  return new Rect(ctx, xPos, yPos, width, height);
}
