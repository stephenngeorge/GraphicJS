'use strict';

import g from './graphic';

import { outlines } from './stylesheet';

const { c, width, height, id } = g.canvas({
  width: 1200,
  el: document.getElementById('canvas-container')
})

g.bgSolid(c).centre();

let circ = g.circle(c, -width * .5, 0, 40);
let circS = g.circle(c, -width * .5, -height * .25, 20);
let angle = 0;
let rotation = 0;

g.animate(() => spyro(circ), 96, (Math.floor(circ.circumf())) * 4).then(() => {
  g.animate(() => spyro(circS), 96);
});


function spyro(disc) {
  // g.bgSolid(c, '#f1f1f1', 'centre');
  g.aside(c, () => {
    c.translate(disc.x, disc.y);
    g.rotate(c, {
      units: 'd',
      angle,
      code: () => {
        let radius = g.line(c, 0, 0, disc.r, 0);
        let curtateL = g.line(c, 0, 0, disc.r * .5, 0);
        let prolateL = g.line(c, 0, 0, disc.r * 1.5, 0);
        let cycloid = g.circle(c, radius.xTo, radius.yTo, 1).draw('rgba(200, 0, 100, .9)');
        let curtate = g.circle(c, curtateL.xTo, curtateL.yTo, 1).draw('rgba(197, 98, 110, .4)');
        let prolate = g.circle(c, prolateL.xTo, prolateL.yTo, 1).draw('rgba(197, 98, 110, .4)');
      }
    });
  });
  disc.x += 1;
  angle += 360 / disc.circumf();

}
