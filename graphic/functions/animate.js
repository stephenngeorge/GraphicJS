'use strict';

export default function animate(animation, frameRate = 24, stop = null) {
  let frameCount = 0;
  let interval = setInterval(() => {
    animation();
    frameCount++;
    if (frameCount === stop) {
      clearInterval(interval);
    }
  }, 1000 / frameRate);
}
