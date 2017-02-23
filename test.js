'use strict';

import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
})

g.bgSolid(c).centre();

g.circle(c, 0, 0, 50).outline();

function test () {
  console.log('so far so good')
}
