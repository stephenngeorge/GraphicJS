import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

g.bgSolid(c);
g.curve(c, 50, 50, 300, 200, 300, 50).draw();
