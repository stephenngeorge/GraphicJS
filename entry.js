'use strict';

import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

let value = g.map(20, 0, 200, 0, 70);
console.log(value);
