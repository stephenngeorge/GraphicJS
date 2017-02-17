'use strict';

import Rect from '../classes/Rect.js';

export default function rect(ctx, {xPos = 42, yPos = 42, width = 42, height = 42} = {}) {
  return new Rect(ctx, xPos, yPos, width, height);
}
