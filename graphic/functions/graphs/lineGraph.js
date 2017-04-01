'use strict';

import LineGraph from '../../classes/graphs/LineGraph';

export default function lineGraph(ctx, {m = 1, c = 0, exp = 1, resolutionX = 1, resolutionY = 1, mode = null } = {}) {
  return new LineGraph(ctx, m, c, exp, resolutionX, resolutionY, mode);
}
