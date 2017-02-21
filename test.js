'use strict';
// import GraphicJS library
import g from './graphic';
// import styles
import { shapeFill, outlines } from './stylesheet';

// define canvas, target element & set canvas data to variables
const { c, width, height, id } = g.canvas({
  id: 'graphicJS-tutorial-sketch',
  el: document.getElementById('canvas-container')
});

let x = 0;
let y = 0;
let history = [];

g.bgSolid(c, '#fff').centre();

g.animate(() => {
  g.rect(c, -width * .5, -height * .5, width, height).draw('#e7e7e7');
  history.forEach(obj => {
    g.circle(c, obj.x, obj.y, 3).draw('rgba(200, 0, 100, .05)');
  });
  let point = g.circle(c, x, y, 6).draw('rgba(200, 0, 100, .8)');
  history.push({x: point.x, y: point.y});
  // if (history.length > 50) { history.shift() }

  let choice = Math.random();
  if (choice <= .25) {
    x++;
  }
  else if (choice <= .5) {
    y++;
  }
  else if (choice <= .75) {
    x--;
  }
  else if (choice <= 1) {
    y--;
  }
}, 50);
