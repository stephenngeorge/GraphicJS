'use strict';

import g from './graphic';

import { outlines } from './stylesheet';

const { c, width, height, id } = g.canvas({
  width: 1000,
  height: 1000,
  el: document.getElementById('canvas-container')
})

g.bgSolid(c, '#fff').centre();

// configuration variables
let factor = 5,
    rad = 200,
    angle = 0,
    orbitRotation = 0;

let circ = g.circle(c, 0, 0, rad);
let radius = g.line(c, 0, 0, 0, -circ.r);

function spyrograph() {
  g.rotate(c, {
    units: 'd',
    angle,
    // for each rotation in animation, execute the following function
    code: () => {
      // save context, then execute function argument
      g.aside(c, () => {
        // translate to main circle perimeter, draw point & smaller circle touching (not drawn to canvas)
        radius.draw({weight: 1, colour: 'rgba(160, 160, 160, .3)'});
        c.translate(radius.xTo, radius.yTo);
        g.circle(c, 0, 0, 1).draw('rgba(128, 128, 128, .6)');
        let orbit = g.circle(c, 0, -circ.r / factor, circ.r / factor);
        // translate to centre of smaller circle (orbit) and execute new function
        g.aside(c, () => {
          c.translate(orbit.x, orbit.y);
          g.rotate(c, {
            units: 'd',
            angle: orbitRotation,
            // rotate relative to centre of outer orbit & draw lines from centre (not drawn to canvas)
            code: () => {
              let cycloid_l = g.line(c, 0, 0, 0, orbit.y);
              let curtate_l = g.line(c, 0, 0, 0, orbit.y * .4);
              let prolate_l = g.line(c, 0, 0, 0, orbit.y * 2);
              // draw points at the end of each line
              let cycloid = g.circle(c, cycloid_l.xTo, cycloid_l.yTo, 2).draw('rgba(60, 60, 60, .4)');
              let curtate = g.circle(c, curtate_l.xTo, curtate_l.yTo, 2).draw('rgba(30, 30, 30, .4)');
              let prolate = g.circle(c, prolate_l.xTo, prolate_l.yTo, 2).draw('rgba(90, 90, 90, .4)');
            }
          }).then(() => orbitRotation += factor)
            .catch(err => console.log(err));
        });
      });
    }
  }).then(() => angle++)
    .catch(err => console.log(err));
}

g.animate(spyrograph, 48, 361);
