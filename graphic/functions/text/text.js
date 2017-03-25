'use strict';

import Text from '../../classes/Text';

export default function text(ctx, string, xPos, yPos) {
  return new Text(ctx, string, xPos, yPos);
}
