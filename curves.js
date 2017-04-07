import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container'),
  width: 500,
  height: 500
});

g.bgSolid(c);

let bez1 = g.bezier(c, 0, 0, 0, 0, width, height, width, height);
let bez2 = g.bezier(c, 0, 0, 0, 0, width, height, width, height);
let bez3 = g.bezier(c, width, 0, width, 0, 0, height, 0, height);
let bez4 = g.bezier(c, width, 0, width, 0, 0, height, 0, height);
let bezsm1 = g.bezier(c, 0, 0, 0, 0, width * .5, height * .5, width * .5, height * .5);
let bezsm2 = g.bezier(c, 0, 0, 0, 0, width * .5, height * .5, width * .5, height * .5);
let bezsm3 = g.bezier(c, width, 0, width, 0, width * .5, height * .5, width * .5, height * .5);
let bezsm4 = g.bezier(c, width, 0, width, 0, width * .5, height * .5, width * .5, height * .5);
let bezsm5 = g.bezier(c, 0, height, 0, height, width * .5, height * .5, width * .5, height * .5);
let bezsm6 = g.bezier(c, 0, height, 0, height, width * .5, height * .5, width * .5, height * .5);
let bezsm7 = g.bezier(c, width, height, width, height, width * .5, height * .5, width * .5, height * .5);
let bezsm8 = g.bezier(c, width, height, width, height, width * .5, height * .5, width * .5, height * .5);
let curve1 = g.curve(c, 0, 0, width * .5, height * .5, width, height);
let curve2 = g.curve(c, 0, 0, width * .5, height * .5, width, height);
let curve3 = g.curve(c, width, 0, width * .5, height * .5, 0, height);
let curve4 = g.curve(c, width, 0, width * .5, height * .5, 0, height);
let curvesm1 = g.curve(c, 0, 0, width * .25, height * .25, width * .5, height * .5);
let curvesm2 = g.curve(c, 0, 0, width * .25, height * .25, width * .5, height * .5);

let change = 1;
g.animate(() => {
  g.bgSolid(c);

  bez1.ctrlPoint1.x += change;
  if (bez1.ctrlPoint1.x >= width || bez1.ctrlPoint1.x <= 0) change *= -1;
  bez1.ctrlPoint2.x -= change;
  bez2.ctrlPoint1.y += change;
  bez2.ctrlPoint2.y -= change;
  bez3.ctrlPoint1.x -= change;
  bez3.ctrlPoint2.x += change;
  bez4.ctrlPoint1.y += change;
  bez4.ctrlPoint2.y -= change;

  bezsm1.ctrlPoint1.x += change;
  bezsm1.ctrlPoint2.x -= change;
  bezsm2.ctrlPoint1.y += change;
  bezsm2.ctrlPoint2.y -= change;
  bezsm3.ctrlPoint1.x -= change;
  bezsm3.ctrlPoint2.x += change;
  bezsm4.ctrlPoint1.y += change;
  bezsm4.ctrlPoint2.y -= change;
  bezsm5.ctrlPoint1.x += change;
  bezsm5.ctrlPoint2.x -= change;
  bezsm6.ctrlPoint1.y -= change;
  bezsm6.ctrlPoint2.y += change;
  bezsm7.ctrlPoint1.x -= change;
  bezsm7.ctrlPoint2.x += change;
  bezsm8.ctrlPoint1.y -= change;
  bezsm8.ctrlPoint2.y += change;

  curve1.ctrlPoint.x += change * .5;
  curve1.ctrlPoint.y -= change * .5;
  curve2.ctrlPoint.y += change * .5;
  curve2.ctrlPoint.x -= change * .5;
  curve3.ctrlPoint.x -= change * .5;
  curve3.ctrlPoint.y -= change * .5;
  curve4.ctrlPoint.x += change * .5;
  curve4.ctrlPoint.y += change * .5;

  bez1.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bez2.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bez3.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bez4.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm1.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm2.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm3.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm4.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm5.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm6.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm7.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  bezsm8.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  curve1.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  curve2.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  curve3.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});
  curve4.draw({ weight: 3, colour: 'rgba(200, 0, 100, .7)'});

  change *= .999;

}, 200);
