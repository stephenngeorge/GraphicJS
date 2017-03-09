import g from './graphic';

const { c, width, height, id } = g.canvas({
  id: 'bouncing-balls',
  el: document.getElementById('canvas-container')
});

let ball = g.circle(c, 60, 40, 50);
console.log(ball.pos);
