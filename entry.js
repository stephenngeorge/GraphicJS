import g from './graphic';
import { Engine, Body } from './graphic-engine';

const { c, width, height, id } = g.canvas({
  id: 'bouncing-balls',
  el: document.getElementById('canvas-container')
});

let ball = g.circle(c, width * .5, height * .5, 20);
let circ = g.circle(c, width * .3, 0 + 50, 20);

let bodies = {};
bodies.ball = new Body(ball);
bodies.circ = new Body(circ);

let engine = new Engine(bodies, {
  context: c,
  boundX: true,
  boundY: true
});

g.animate(() => {
  engine.step();

  g.bgSolid(c);
  ball.draw().outline();
  circ.draw().outline();
}, 96);
