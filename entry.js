import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

g.bgSolid(c).cartesian();

g.lineGraph(c, {
  m: -1,
  mode: 'cartesian'
}).calc();
