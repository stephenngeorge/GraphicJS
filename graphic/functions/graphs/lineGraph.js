'use strict';

import LineGraph from '../../classes/graphs/LineGraph';

export default function lineGraph(ctx, {m = 1, c = 0, exp = 1, sfX = 1, sfY = 1, mode = null } = {}) {
  return new LineGraph(ctx, m, c, exp, sfX, sfY, mode);
}
