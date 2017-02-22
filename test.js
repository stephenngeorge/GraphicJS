'use strict';

import g from './graphic';

const { c, width, height, id} = g.canvas({
  width: 500,
  height: 500,
  id: 'randomWalker',
  el: document.getElementById('canvas-container')
});

g.bgSolid(c, '#fff').centre();

let walker = g.circle(c, 0, 0, 6);
let pencil = g.line(c, 0, 0, 0, 0);

const SCENE_1 = g.animate(walk, 100, 200);
SCENE_1.then(res => {
  const SCENE_2 = g.animate(writeOn, 100, 200);
  SCENE_2.then(res => {
    console.log({
      status: 'ANIMATION COMPLETE',
      message: 'we hope you enjoyed the show'
    });
  }).catch(err => console.log(err));
}).catch(err => console.log(err));


function walk() {
  g.bgSolid(c, '#f1f1f1', 'centre');
  walker.draw('rgba(200, 0, 100, .6)');
  walker.x++;
}

function writeOn() {
  g.bgSolid(c, '#f1f1f1', 'centre');
  walker.draw('rgba(200, 0, 100, .6)');
  pencil.draw({weight: 2, colour: '#808080'});
  pencil.xTo++;
}
