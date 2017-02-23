'use strict';

import g from './graphic';

import { outlines } from './stylesheet';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
})

g.bgSolid(c).centre();

let circ = g.circle(c, 0, 0, 40).outline(outlines);
circ.rotate({
  units: 'd',
  angle: 45,
  code: () => g.line(c, 0, 0, 100, 0).draw(outlines)
});
g.line(c, -50, 0, 200, 0).draw(outlines);
