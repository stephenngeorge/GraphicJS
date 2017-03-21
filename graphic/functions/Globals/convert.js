'use strict';

// convert degrees in to radians
const radians = (degrees) => {
  return degrees * (Math.PI / 180);
}
// convert radians to degrees
const degrees = (radians) => {
  return radians * (180 / Math.PI);
}


module.exports = {
  radians,
  degrees
}
