'use strict';

import Grid from '../classes/Grid';

export default function grid(c, { cols = 20, rows = 20 } = {}) {
  return new Grid(c, cols, rows);
}
