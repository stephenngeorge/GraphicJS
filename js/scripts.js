/******/!function(t){/******/
/******/
// The require function
/******/
function e(i){/******/
/******/
// Check if module is in cache
/******/
if(n[i])/******/
return n[i].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var r=n[i]={/******/
i:i,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
/******/
/******/
// define getter function for harmony exports
/******/
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
/******/
// __webpack_public_path__
/******/
return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){/******/
e.o(t,n)||/******/
Object.defineProperty(t,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:i})},e.n=function(t){/******/
var n=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=27)}([/* 0 */
/***/
function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){i(this,t)}return r(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,i=t.angle,r=void 0===i?Math.PI/2:i,o=t.code,s=void 0===o?function(){return console.log("rotated by: "+r)}:o,a=n.toUpperCase();return"RAD"===a||"RADS"===a||"R"===a||"RADIANS"===a?(this.ctx.save(),this.ctx.rotate(r),s(),this.ctx.restore(),this):"DEG"===a||"DEGS"===a||"D"===a||"DEGREES"===a?(this.ctx.save(),this.ctx.rotate(r*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}}]),t}();e.default=o},/* 1 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.x=n,u.y=i,u.width=s,u.height=a,u}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.x,this.y,this.width,this.height),this}},{key:"area",value:function(){return this.width*this.height}},{key:"perim",value:function(){return 2*(this.width+this.height)}}]),e}(l.default);e.default=c},/* 2 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.x=t,i.y=n,i}return s(e,t),a(e,[{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}}]),e}(l.default);e.default=c},/* 3 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(12),h=i(c),f=function(t){function e(t,n,i,s){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.pos=(0,h.default)(n,i),a.x=a.pos.x,a.y=a.pos.y,a.r=s,a.vel=(0,h.default)(1,1),a}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"area",value:function(){return Math.PI*(this.r*this.r)}},{key:"circumf",value:function(){return Math.PI*this.r*2}}]),e}(l.default);e.default=f},/* 4 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xFrom=n,u.yFrom=i,u.xTo=s,u.yTo=a,u}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.xFrom,this.yFrom),this.ctx.lineTo(this.xTo,this.yTo),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"dist",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo),n=t*t+e*e;return Math.sqrt(n)}},{key:"grad",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo);return e/t}},{key:"xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this.grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){var i=Math.atan(n);return i*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this.xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){var n=Math.PI/2-this.xAngle();return n*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(l.default);e.default=c},/* 5 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=n(11),h=i(c),f=function(t){function e(t,n,i){r(this,e);var s=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.ctx=t,s.x=n,s.y=i,s}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return(0,h.default)(this.ctx,this.x,this.y,4).outline({weight:1,colour:t}),this}}]),e}(l.default);e.default=f},/* 6 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s,a,u){r(this,e);var l=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.x=n,l.y=i,l.r=s,l.angle=a,l.size=u,l}/* ****
    DESIGN METHODS
  **** */
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.x,this.y),this.ctx.lineTo(e,n),this.ctx.arc(this.x,this.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,i=t.colour,r=void 0===i?"#808080":i,o=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.x,this.y),this.ctx.lineTo(o,s),this.ctx.arc(this.x,this.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(l.default);e.default=c},/* 7 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s,a,u){r(this,e);var l=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.x=n,l.y=i,l.r=s,l.angle=a,l.endAngle=2*Math.asin(l.chord/(2*l.r)),l.chord=u,l.dir=!1,l.chord>2*l.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),l}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return s(e,t),a(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.x+this.r,this.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i,o=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.x+this.r,this.y,this.r,this.angle,this.angle+o,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(l.default);e.default=c},/* 8 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.xPos=n,a.yPos=i,a.side=s,a.height=Math.sqrt(a.side*a.side-.5*a.side*(.5*a.side)),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.side,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.side,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.side,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.side,this.yPos+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"perim",value:function(){return 3*this.side}}]),e}(l.default);e.default=c},/* 9 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xPos=n,u.yPos=i,u.base=s,u.side=a,u.height=Math.sqrt(u.side*u.side-.5*u.base*(.5*u.base)),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.base,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.base,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.base,this.yPos+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return.5*this.base*this.height*.5*2}},{key:"perim",value:function(){return 2*this.side+this.base}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,i=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),i=Math.asin(this.height/this.side),r=i;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,i=Math.asin(this.height/this.side)*(180/Math.PI),r=i}return[n,i,r]}}]),e}(l.default);e.default=c},/* 10 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(0),l=i(u),c=function(t){function e(t,n,i,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xPos=n,u.yPos=i,u.base=s,u.height=a,u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,i=t.colour,r=void 0===i?"#808080":i;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"area",value:function(){return this.height*this.base*.5}},{key:"perim",value:function(){return this.base+this.height+this.hyp()}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,i=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,i=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),i=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,i,r]}}]),e}(l.default);e.default=c},/* 11 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(3),s=i(o)},/* 12 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return new s.default(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(2),s=i(o)},/* 13 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(14),o=i(r),s=n(17),a=i(s),u=n(15),l=i(u),c=n(16),h=i(c),f=n(28),d=i(f),v=n(18),p=i(v),y=n(12),b=i(y),g=n(19),x=i(g),_=n(20),P=i(_),w=n(22),O=i(w),m=n(23),M=i(m),j=n(11),E=i(j),R=n(21),k=i(R),T=n(26),S=i(T),D=n(24),I=i(D),C=n(25),A=i(C),F=n(0),G=i(F),W=n(2),B=i(W),N=n(4),q=i(N),U=n(5),z=i(U),H=n(6),L=i(H),V=n(7),X=i(V),Y=n(3),J=i(Y),K=n(1),Q=i(K),Z=n(10),$=i(Z),tt=n(8),et=i(tt),nt=n(9),it=i(nt),rt={animate:o.default,rotate:a.default,aside:l.default,map:d.default,canvas:h.default,bgSolid:p.default,vector:b.default,line:x.default,point:P.default,sector:O.default,segment:M.default,circle:E.default,rect:k.default,triangleR:S.default,triangleE:I.default,triangleI:A.default,classes:{Graphic:G.default,Vector:B.default,Line:q.default,Point:z.default,Sector:L.default,Segment:X.default,Circle:J.default,Rect:Q.default,TriangleR:$.default,TriangleE:et.default,TriangleI:it.default}};t.exports=rt},/* 14 */
/***/
function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=0;return new Promise(function(r,o){var s=setInterval(function(){t(),i++,i===n&&(clearInterval(s),r(i)),18e5===i&&o({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 15 */
/***/
function(t,e,n){"use strict";function i(t,e){return new Promise(function(n,i){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 16 */
/***/
function(t,e,n){"use strict";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,i=t.height,r=void 0===i?400:i,o=t.id,s=void 0===o?"canvas":o,a=t.el,u=void 0===a?document.body:a,l=document.createElement("canvas");
// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return l.width=n,l.height=r,l.id=s,u.appendChild(l),{c:l.getContext("2d"),width:l.width,height:l.height,id:l.id}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 17 */
/***/
function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,i=void 0===n?"rad":n,r=e.angle,o=void 0===r?Math.PI/2:r,s=e.code,a=void 0===s?function(){return console.log("rotated by: "+o)}:s,u=i.toUpperCase();return new Promise(function(e,n){"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(t.save(),t.rotate(o),a(),t.restore(),e("reset transformations")):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(t.save(),t.rotate(o*(Math.PI/180)),a(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},/* 18 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// draw fill rectangle full size of canvas, colour default to light grey
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",i=t.canvas.clientWidth,r=t.canvas.clientHeight,o=null;switch(n){case"top-left":o=new s.default(t,0,0,i,r).draw(e);break;case"centre":o=new s.default(t,.5*-i,.5*-r,i,r).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(1),s=i(o)},/* 19 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(4),s=i(o)},/* 20 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return new s.default(t,e,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(5),s=i(o)},/* 21 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(1),s=i(o)},/* 22 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2;return new o.default(t,e,n,i,r,s)};var r=n(6),o=i(r)},/* 23 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new s.default(t,e,n,i,r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(7),s=i(o)},/* 24 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new s.default(t,e,n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(8),s=i(o)},/* 25 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(9),s=i(o)},/* 26 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new s.default(t,e,n,i,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(10),s=i(o)},/* 27 */
/***/
function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(13),o=i(r),s=o.default.canvas({el:document.getElementById("canvas-container")}),a=(s.c,s.width,s.height,s.id,o.default.map(20,0,200,0,70));console.log(a)},/* 28 */
/***/
function(t,e,n){"use strict";function i(t,e,n,i,r){var o=Math.abs(e-n),s=Math.abs(i-r),a=e<n?e:n,u=i<r?i:r,l=t-a;if(!(l<0)){var c=(t-a)/o*100;return s/100*c+u}console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i}]);
//# sourceMappingURL=scripts.js.map