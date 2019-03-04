/******/!function(t){/******/
/******/
// The require function
/******/
function e(o){/******/
/******/
// Check if module is in cache
/******/
if(n[o])/******/
return n[o].exports;/******/
// Create a new module (and put it into the cache)
/******/
var i=n[o]={/******/
i:o,/******/
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
return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}// webpackBootstrap
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
e.m=t,/******/
/******/
// expose the module cache
/******/
e.c=n,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
e.i=function(t){return t},/******/
/******/
// define getter function for harmony exports
/******/
e.d=function(t,n,o){/******/
e.o(t,n)||/******/
Object.defineProperty(t,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:o})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
e.n=function(t){/******/
var n=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(n,"a",n),n},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******/
/******/
// __webpack_public_path__
/******/
e.p="/",e(e.s=16)}([/* 0 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(){o(this,t)}return r(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,o=t.angle,i=void 0===o?Math.PI/2:o,r=t.code,s=void 0===r?function(){return console.log("rotated by: ".concat(i))}:r,u=n.toUpperCase();return"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(this.ctx.save(),this.ctx.rotate(i),s(),this.ctx.restore(),this):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(this.ctx.save(),this.ctx.rotate(i*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}}]),t}()},/* 1 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),y=/*#__PURE__*/
function(t){function e(t,n){var o;return i(this,e),o=u(this,a(e).call(this)),o.x=t,o.y=n,o}// copy the vector instead of mutating, preserves the original
return h(e,t),s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"mag",value:function(t){var e=Math.sqrt(this.x*this.x+this.y*this.y)*t,n=Math.atan(this.y/this.x);return this.x=Math.cos(n)*e,this.y=Math.sin(n)*e,this}},{key:"_heading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=Math.atan(this.y/this.x);return"RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e||"RADIAN"===e?n:"DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e||"DEGREE"===e?n*(180/Math.PI):void 0}}]),e}(f.a)},/* 2 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s,c,h,l,f){var p;return i(this,e),p=u(this,a(e).call(this)),p.ctx=t,p.start=new y.a(n,o),p.ctrlPoint1=new y.a(r,s),p.ctrlPoint2=new y.a(c,h),p.end=new y.a(l,f),p}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.bezierCurveTo(this.ctrlPoint1.x,this.ctrlPoint1.y,this.ctrlPoint2.x,this.ctrlPoint2.y,this.end.x,this.end.y),this.ctx.strokeStyle=i,this.ctx.stroke(),this}}]),e}(f.a)},/* 3 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r){var s;return i(this,e),s=u(this,a(e).call(this)),s.ctx=t,s.pos=new y.a(n,o),s.vel=new y.a(0,0),s.r=r,s}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.PI*(this.r*this.r)}},{key:"_circumf",value:function(){return Math.PI*this.r*2}}]),e}(f.a)},/* 4 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(3);
// create new circle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new o.a(t,e,n,i)}},/* 5 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s,c,h){var l;return i(this,e),l=u(this,a(e).call(this)),l.ctx=t,l.start=new y.a(n,o),l.ctrlPoint=new y.a(r,s),l.end=new y.a(c,h),l}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.quadraticCurveTo(this.ctrlPoint.x,this.ctrlPoint.y,this.end.x,this.end.y),this.ctx.strokeStyle=i,this.ctx.stroke(),this}}]),e}(f.a)},/* 6 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var c;return i(this,e),c=u(this,a(e).call(this)),c.ctx=t,c.start=new y.a(n,o),c.end=new y.a(r,s),c}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.lineTo(this.end.x,this.end.y),this.ctx.strokeStyle=i,this.ctx.stroke(),this}},{key:"_dist",value:function(){var t=Math.abs(this.start.x-this.end.x),e=Math.abs(this.start.y-this.end.y),n=t*t+e*e;return Math.sqrt(n)}},{key:"_grad",value:function(){var t=Math.abs(this.start.x-this.end.x);return Math.abs(this.start.y-this.end.y)/t}},{key:"_xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this._grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){return Math.atan(n)*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"_yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this._xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){return(Math.PI/2-this._xAngle())*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(f.a)},/* 7 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return v});/* harmony import */
var f=n(39),y=n(40),p=n(4),v=/*#__PURE__*/
function(t){function e(t,n,o){var r;return i(this,e),r=u(this,a(e).call(this)),r.ctx=t,r.pos=new y.a(n,o),r}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return n.i(p.a)(this.ctx,this.pos.x,this.pos.y,4).outline({weight:1,colour:t}),this}}]),e}(f.a)},/* 8 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var c;return i(this,e),c=u(this,a(e).call(this)),c.ctx=t,c.pos=new y.a(n,o),c.width=r,c.height=s,c}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"_area",value:function(){return this.width*this.height}},{key:"_perim",value:function(){return 2*(this.width+this.height)}}]),e}(f.a)},/* 9 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s,c){var h;return i(this,e),h=u(this,a(e).call(this)),h.ctx=t,h.pos=new y.a(n,o),h.r=r,h.angle=s,h.size=c,h}/* ****
    DESIGN METHODS
  **** */
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(e,n),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,o=t.colour,i=void 0===o?"#808080":o,r=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(r,s),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(f.a)},/* 10 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s,c){var h;return i(this,e),h=u(this,a(e).call(this)),h.ctx=t,h.pos=new y.a(n,o),h.r=r,h.angle=s,h.endAngle=2*Math.asin(h.chord/(2*h.r)),h.chord=c,h.dir=!1,h.chord>2*h.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),h}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return h(e,t),s(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o,r=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+r,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.stroke(),this}}]),e}(f.a)},/* 11 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r){var s;return i(this,e),s=u(this,a(e).call(this)),s.ctx=t,s.pos=new y.a(n,o),s.side=r,s.height=Math.sqrt(s.side*s.side-.5*s.side*(.5*s.side)),s}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"_perim",value:function(){return 3*this.side}}]),e}(f.a)},/* 12 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var c;return i(this,e),c=u(this,a(e).call(this)),c.ctx=t,c.pos=new y.a(n,o),c.base=r,c.side=s,c.height=Math.sqrt(c.side*c.side-.5*c.base*(.5*c.base)),c}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return.5*this.base*this.height*.5*2}},{key:"_perim",value:function(){return 2*this.side+this.base}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,i=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),o=Math.asin(this.height/this.side),i=o;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,o=Math.asin(this.height/this.side)*(180/Math.PI),i=o}return[n,o,i]}}]),e}(f.a)},/* 13 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(39),y=n(40),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var c;return i(this,e),c=u(this,a(e).call(this)),c.ctx=t,c.pos=new y.a(n,o),c.base=r,c.height=s,c}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"_area",value:function(){return this.height*this.base*.5}},{key:"_perim",value:function(){return this.base+this.height+this.hyp()}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,i=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,o=Math.asin(this.base/this.hyp()),i=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),o=Math.asin(this.base/this.hyp())*(180/Math.PI),i=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,o,i]}}]),e}(f.a)},/* 14 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),y=/*#__PURE__*/
function(t){function e(t,n,o){var r;return i(this,e),r=u(this,a(e).call(this)),r.ctx=t,r.cols=n,r.rows=o,r.grid=[],r}// get data for cell positions (returned as a nested array)
return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=this.ctx.canvas.height,n=0;n<t/this.cols;n++){for(var o={x:t/(t/this.cols)*n,rows:[],index:n},i=0;i<this.rows;i++)o.rows.push({y:e/(e/this.rows)*i,index:i});this.grid.push(o)}return this}},{key:"draw",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.weight,o=void 0===n?1:n,i=e.colour,r=void 0===i?"rgba(127, 127, 127, .4)":i;return this.grid.forEach(function(e){t.ctx.beginPath(),t.ctx.moveTo(e.x,0),t.ctx.lineTo(e.x,t.ctx.canvas.height),t.ctx.strokeStyle=r,t.ctx.lineWidth=o,t.ctx.stroke(),e.rows.forEach(function(n){t.ctx.beginPath(),t.ctx.moveTo(e.x,n.y),t.ctx.lineTo(e.x+t.cols,n.y),t.ctx.strokeStyle=r,t.ctx.lineWidth=o,t.ctx.stroke()})}),this}},{key:"_numCells",value:function(){return this.ctx.canvas.width/this.cols*(this.ctx.canvas.height/this.rows)}},{key:"_cell",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?0:e,o=t.y,i=void 0===o?0:o,r=t.colour,s=void 0===r?"#FFC0CB":r,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=this.grid[n].x,a=this.grid[n].rows[i].y;return"highlight"===u&&(this.ctx.fillStyle=s,this.ctx.fillRect(c,a,this.cols,this.rows)),{x:c,y:a}}}]),e}(f.a)},/* 15 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(32),i=n(35),r=n(33),s=n(34),u=n(31),c=n(29),a=n.n(c),h=n(30),l=n(36),f=n(38),y=n(37),p=n(19),v=n(0),b=n(1),d=n(14),g={shapes:p.a,animate:o.a,rotate:i.a,aside:r.a,map:u.a,convert:a.a,date:h.a,canvas:s.a,bgSolid:l.a,vector:f.a,grid:y.a,classes:{Graphic:v.a,Vector:b.a,Grid:d.a}};/* harmony default export */
e.a=g},/* 16 */
/***/
function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});/* harmony import */
var o=n(15),i=o.a.shapes,r=o.a.canvas({width:600,height:600,id:"canvas"}),s=r.c,u=r.width,c=r.height;o.a.bgSolid(s);var a=i.circle(s,u/2,c/2,12);a.vel=o.a.vector(1,2),o.a.animate(function(){o.a.bgSolid(s),a.pos.add(a.vel),a.draw("#333").outline({weight:2,colour:"#fff"}).boundX(0+a.r,u-a.r).boundY(0+a.r,c-a.r)},120)},/* 17 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(2);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,i,r,s,u,c,a){return new o.a(t,e,n,i,r,s,u,c,a)}},/* 18 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(5);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,i,r,s,u){return new o.a(t,e,n,i,r,s,u)}},/* 19 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(17),i=n(2),r=n(4),s=n(3),u=n(18),c=n(5),a=n(20),h=n(6),l=n(21),f=n(7),y=n(22),p=n(8),v=n(23),b=n(9),d=n(24),g=n(10),x=n(25),m=n(11),w=n(26),O=n(12),S=n(27),_=n(13),P={bezier:o.a,circle:r.a,curve:u.a,line:a.a,point:l.a,rect:y.a,sector:v.a,segment:d.a,triangleE:x.a,triangleI:w.a,triangleR:S.a,Classes:{Bezier:i.a,Circle:s.a,Curve:c.a,Line:h.a,Point:f.a,Rect:p.a,Sector:b.a,Segment:g.a,TriangleE:m.a,TriangleI:O.a,TriangleR:_.a}};/* harmony default export */
e.a=P},/* 20 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(6);
// create new line, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,i,r)}},/* 21 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(7);/* harmony default export */
e.a=function(t,e,n){return new o.a(t,e,n)}},/* 22 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(8);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,i,r)}},/* 23 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(9);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2;return new o.a(t,e,n,i,r,s)}},/* 24 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(10);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new o.a(t,e,n,i,r,s)}},/* 25 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(11);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new o.a(t,e,n,i)}},/* 26 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(12);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,i,r)}},/* 27 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(13);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new o.a(t,e,n,i,r)}},/* 28 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(0),y=n(1),p=/*#__PURE__*/
function(t){function e(t,n,o,r,s){var c;return i(this,e),c=u(this,a(e).call(this)),c.ctx=t,c.pos=new y.a(n,o),c.width=r,c.height=s,c}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,i=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=i,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"_area",value:function(){return this.width*this.height}},{key:"_perim",value:function(){return 2*(this.width+this.height)}}]),e}(f.a)},/* 29 */
/***/
function(t,e,n){"use strict";
// convert degrees in to radians
var o=function(t){return t*(Math.PI/180)},i=function(t){return t*(180/Math.PI)};t.exports={radians:o,degrees:i}},/* 30 */
/***/
function(t,e,n){"use strict";function o(){var t=new Date;return{millis:t.getMilliseconds(),seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours(),day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear(),today:t}}/* harmony export (immutable) */
e.a=o},/* 31 */
/***/
function(t,e,n){"use strict";function o(t,e,n,o,i){
// get the ranges passed in from minimum and maximum values
var r=Math.abs(e-n),s=Math.abs(o-i),u=e<n?e:n,c=o<i?o:i;if(!(t-u<0))// return that same percentage [line20] value of second range
return s/100*((t-u)/r*100)+c;console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}/* harmony export (immutable) */
e.a=o},/* 32 */
/***/
function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=0;return new Promise(function(i,r){var s=setInterval(function(){t(),o++,o===n&&(clearInterval(s),i(o)),18e5===o&&r({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}/* harmony export (immutable) */
e.a=o},/* 33 */
/***/
function(t,e,n){"use strict";function o(t,e){return new Promise(function(n,o){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}/* harmony export (immutable) */
e.a=o},/* 34 */
/***/
function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,o=t.height,i=void 0===o?400:o,r=t.id,s=void 0===r?"canvas":r,u=t.el,c=void 0===u?document.body:u,a=document.createElement("canvas");// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return a.width=n,a.height=i,a.id=s,c.appendChild(a),{c:a.getContext("2d"),width:a.width,height:a.height,id:a.id}}/* harmony export (immutable) */
e.a=o},/* 35 */
/***/
function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,o=void 0===n?"rad":n,i=e.angle,r=void 0===i?Math.PI/2:i,s=e.code,u=void 0===s?function(){return console.log("rotated by: ".concat(r))}:s,c=o.toUpperCase();return new Promise(function(e,n){"RAD"===c||"RADS"===c||"R"===c||"RADIANS"===c?(t.save(),t.rotate(r),u(),t.restore(),e("reset transformations")):"DEG"===c||"DEGS"===c||"D"===c||"DEGREES"===c?(t.save(),t.rotate(r*(Math.PI/180)),u(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}/* harmony export (immutable) */
e.a=o},/* 36 */
/***/
function(t,e,n){"use strict";
// draw fill rectangle full size of canvas, colour default to light grey
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",o=t.canvas.clientWidth,r=t.canvas.clientHeight,s=null;switch(n){case"top-left":s=new i.a(t,0,0,o,r).draw(e);break;case"centre":s=new i.a(t,.5*-o,.5*-r,o,r).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return s}/* harmony export (immutable) */
e.a=o;/* harmony import */
var i=n(28)},/* 37 */
/***/
function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.cols,o=void 0===n?20:n,r=e.rows,s=void 0===r?20:r;return new i.a(t,o,s)}/* harmony export (immutable) */
e.a=o;/* harmony import */
var i=n(14)},/* 38 */
/***/
function(t,e,n){"use strict";function o(t,e){return new i.a(t,e)}/* harmony export (immutable) */
e.a=o;/* harmony import */
var i=n(1)},/* 39 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(){o(this,t)}return r(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,o=t.angle,i=void 0===o?Math.PI/2:o,r=t.code,s=void 0===r?function(){return console.log("rotated by: ".concat(i))}:r,u=n.toUpperCase();return"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(this.ctx.save(),this.ctx.rotate(i),s(),this.ctx.restore(),this):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(this.ctx.save(),this.ctx.rotate(i*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}}]),t}()},/* 40 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(39),y=/*#__PURE__*/
function(t){function e(t,n){var o;return i(this,e),o=u(this,a(e).call(this)),o.x=t,o.y=n,o}// copy the vector instead of mutating, preserves the original
return h(e,t),s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"mag",value:function(t){var e=Math.sqrt(this.x*this.x+this.y*this.y)*t,n=Math.atan(this.y/this.x);return this.x=Math.cos(n)*e,this.y=Math.sin(n)*e,this}},{key:"_heading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=Math.atan(this.y/this.x);return"RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e||"RADIAN"===e?n:"DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e||"DEGREE"===e?n*(180/Math.PI):void 0}}]),e}(f.a)}]);
//# sourceMappingURL=scripts.js.map