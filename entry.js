import g from './graphic';
import { Engine, Body } from './graphic-engine';

const { c, width, height, id } = g.canvas({
  id: 'bouncing-balls',
  el: document.getElementById('canvas-container')
});

let balls = [];
for (let i = 1; i <= 10; i++) {
  let ball = g.circle(c, width / i, height / i, 20);
  balls.push(ball);
}

let bodies = {};
balls.forEach((ball, i) => {
  bodies[`ball-${i}`] = new Body(ball);
});

let engine = new Engine(bodies, {
  context: c,
  boundX: true,
  boundY: true
});

g.animate(() => {
  engine.step();

  g.bgSolid(c);
  balls.forEach(ball => ball.draw().outline());
});
