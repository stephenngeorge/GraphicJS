import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

g.bgSolid(c);

g.text(c, "word", width * .5, height * .5).align('center').baseline('middle').font({ size: '50px', family: 'tahoma' }).outline();
