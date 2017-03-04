'use strict';

import g from './graphic';

const { c, width, height, id } = g.canvas();

g.bgSolid(c).centre();

g.sector(c, 0, 0, 50, 0, (Math.PI / 2) * 3).draw().outline();
