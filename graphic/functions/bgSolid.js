'use strict';
// draw fill rectangle full size of canvas, colour default to light grey
export default function bgSolid(ctx, colour = '#e7e7e7') {
  let canvasWidth = ctx.canvas.clientWidth;
  let canvasHeight = ctx.canvas.clientHeight;
  ctx.fillStyle = colour;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
