import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

g.bgSolid(c);
