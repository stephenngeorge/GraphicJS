'use strict';

import g from './graphic';

import { outlines } from './stylesheet';

const { c, width, height, id } = g.canvas({
  width: 1200,
  height: 1200,
  el: document.getElementById('canvas-container')
})

g.bgSolid(c, '#fff').centre();

// configuration variables
let rad = 200,
    angle = 0,
    orbitRotation = 0,
    lineStyle = 'rgba(160, 160, 160, .7)';

let circ_big = g.circle(c, 0, 0, rad * 1.6);
let radius_big = g.line(c, 0, 0, 0, -circ_big.r);

let circ = g.circle(c, 0, 0, rad);
let radius = g.line(c, 0, 0, 0, -circ.r);

let circ_small = g.circle(c, 0, 0, rad * .5);
let radius_small = g.line(c, 0, 0, 0, -circ_small.r);

let circ_tiny = g.circle(c, 0, 0, rad * .25);
let radius_tiny = g.line(c, 0, 0, 0, -circ_tiny.r);

function spyrograph(disc, radiusLine, f, clr) {
  g.rotate(c, {
    units: 'd',
    angle,
    // for each rotation in animation, execute the following function
    code: () => {
      // save context, then execute function argument
      g.aside(c, () => {
        // translate to main circle perimeter, draw point & smaller circle touching (not drawn to canvas)
        c.translate(radiusLine.xTo, radiusLine.yTo);
        g.circle(c, 0, 0, 1).draw(clr);
        let orbit = g.circle(c, 0, -disc.r / f, disc.r / f);
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
              let cycloid = g.circle(c, cycloid_l.xTo, cycloid_l.yTo, 2).draw(clr);
              let curtate = g.circle(c, curtate_l.xTo, curtate_l.yTo, 2).draw(clr);
              let prolate = g.circle(c, prolate_l.xTo, prolate_l.yTo, 2).draw(clr);
            }
          }).then(() => orbitRotation += f)
            .catch(err => console.log(err));
        });
      });
    }
  }).then(() => angle++)
    .catch(err => console.log(err));
}

g.animate(() => {
  spyrograph(circ_big, radius_big, 8, lineStyle);
}, 48, 360).then(() => {
  g.animate(() => {
    spyrograph(circ, radius, 5, lineStyle);
  }, 48, 360).then(() => {
    g.animate(() => {
      spyrograph(circ_small, radius_small, 3, lineStyle);
    }, 48, 360).then(() => {
      g.animate(() => {
        spyrograph(circ_tiny, radius_tiny, 2, lineStyle );
      }, 48, 360).then(res => {
        console.log({
          status: 'ANIMATION COMPLETE',
          message: 'we hope you enjoyed the show'
        })
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}).catch(err => console.log(err));
