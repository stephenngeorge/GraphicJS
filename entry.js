import g from './graphic';

const { c, width, height, id } = g.canvas();

console.log(g.grid(c).calc().draw())
