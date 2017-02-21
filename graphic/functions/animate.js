'use strict';

export default function animate(animation, frameRate = 24) {
  let interval = setInterval(() => {
    animation()
  }, 1000 / frameRate);
  return interval;
}
