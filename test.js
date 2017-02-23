'use strict';

import g from './graphic';

import { outlines } from './stylesheet';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
})

g.bgSolid(c);
