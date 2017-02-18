'use strict';

import Circle from '../classes/Circle';

export default function circle(context, xPos = 42, yPos = 42, radius = 21) {
  return new Circle(context, xPos, yPos, radius);
}
