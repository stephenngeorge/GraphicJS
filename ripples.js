import g from './graphic';

const { c, width, height, id } = g.canvas({
  el: document.getElementById('canvas-container')
});

g.bgSolid(c, '#fff');

// configuration
let ripples = [];
let frameCount = 0;
c.canvas.addEventListener('click', drop);
const boundary = width < height ? width : height;

g.animate(() => {
  g.bgSolid(c);

  ripples.forEach(ripple => {
    ripple.count++;
    if (ripple.count >= ripple.delay) {
      if (ripple.growth >= 0) ripple.growth -= 0.015;
      if (ripple.a >= 0) ripple.a -= 0.01;
      if (ripple.r < boundary * .5) ripple.r += ripple.growth;
      ripple.draw(`rgba(243, 243, 243, ${ripple.a})`);
      ripple.outline({ colour: `rgba(40, 40, 40, ${ripple.a})` });
    }
  });

}, 24);

function drop(e) {
  let mouseX = e.clientX - c.canvas.offsetLeft;
  let mouseY = e.clientY - c.canvas.offsetTop;

  ripples.push(defineRipple(mouseX, mouseY, 18, 2, 0));
  ripples.push(defineRipple(mouseX, mouseY, 9, 1.8, 6));
  ripples.push(defineRipple(mouseX, mouseY, 5, 1.62, 18));
  ripples.push(defineRipple(mouseX, mouseY, 3, 1.46, 36));
}


function defineRipple(x, y, radius, growthRate, buffer) {
  let ripple = g.circle(c, x, y, radius);
  ripple.growth = growthRate;
  ripple.a = 1;
  ripple.delay = buffer;
  ripple.count = 0;

  return ripple;
}
