'use strict';

export default function bgSolid(canvas, colour = '#e7e7e7') {
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = colour;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
