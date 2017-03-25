import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

g.animate(() => {
  g.bgSolid(c);

  let { hours, minutes, seconds } = g.date();
  g.text(c, `${hours}: ${minutes}: ${seconds}`, width * .5, height * .5)
    .font({ size: '36px', family: 'courier new' })
    .align('center').baseline('middle')
    .draw('#000');
});
