'use strict';

import G from './graphic';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// global variables
const width = canvas.width;
const height = canvas.height;

const borders = {
  weight: 3,
  colour: '#f1f1f1'
}

G.bgSolid(canvas, '#808080');
let ball = G.circle(ctx, width * .5, height * .5, 48).draw('rgba(200, 0, 100, .4)').outline(borders);
G.rect(ctx, 50, 50, width - 100, height - 100).outline(borders);

G.line(ctx, 0, 0, ball.circumf(), ball.circumf()).draw(borders);
G.line(ctx, width, 0, ball.circumf(), ball.circumf()).draw(borders);
