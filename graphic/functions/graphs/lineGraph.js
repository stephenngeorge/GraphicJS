'use strict';

import LineGraph from '../../classes/graphs/LineGraph';

export default function lineGraph(ctx, {m = 1, c = 0, mode = null} = {}) {
  return new LineGraph(ctx, m, c, mode);
}
