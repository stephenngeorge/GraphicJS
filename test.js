'use strict';

import { backgroundSolid, circle, rect } from './brush';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

backgroundSolid(canvas, 'rgba(200, 0, 100, .4)');
circle(ctx, {
  xPos: 200,
  yPos: 200,
  radius: 110
}).draw({
  lineWidth: 5,
  strokeStyle: '#000000',
  fillStyle: '#e7e7e7'
});

rect(ctx, {
  xPos: 300,
  yPos: 50,
  width: 72,
  height: 80
}).draw('#e7e7e7').outline(5, '#000000');
