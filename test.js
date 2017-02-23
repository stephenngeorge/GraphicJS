'use strict';

import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
})

g.bgSolid(c);
g.segment(c, 100, height * .5, 100, Math.PI, 195).invert().outline();
