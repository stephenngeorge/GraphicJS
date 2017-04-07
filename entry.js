import g from './graphic';

const { c, width, height, id } = g.canvas();

g.bgSolid(c);

let maze = g.grid(c).calc().draw()._cell({x: 18, y: 2}, 'highlight');
