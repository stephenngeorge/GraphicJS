import g from './graphic';
import { Engine, Body } from './graphic-engine';

const { c, width, height, id } = g.canvas({
  id: 'bouncing-balls',
  el: document.getElementById('canvas-container')
});


let ball = g.circle(c, width * .5, height * .5);

let bodies = {};
bodies.ball = new Body(ball);

const engine = new Engine(bodies);

g.animate(() => {
  g.bgSolid(c);
  ball.draw();
  engine.update();
}, 24, 100);
