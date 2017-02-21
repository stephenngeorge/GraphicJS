'use strict';

export default function canvas({width = 600, height = 400, id = 'canvas'} = {}) {
  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.id = id;
  document.body.appendChild(canvas);
  return canvas.getContext('2d');
}
