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
var r=n[o]={/******/
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
return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}// webpackBootstrap
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
e.p="/",e(e.s=21)}([/* 0 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(2),y=/*#__PURE__*/
function(t){function e(t,n){var o;return r(this,e),o=c(this,u(e).call(this)),o.x=t,o.y=n,o}// copy the vector instead of mutating, preserves the original
return h(e,t),s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"mag",value:function(t){var e=Math.sqrt(this.x*this.x+this.y*this.y)*t,n=Math.atan(this.y/this.x);return this.x=Math.cos(n)*e,this.y=Math.sin(n)*e,this}},{key:"limit",value:function(t){return this.x>t?(this.y=this.y/this.x*t,this.x=t):this.y>t&&(this.x=this.x/this.y*t,this.y=t),this}},{key:"_heading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=Math.atan(this.y/this.x);return"RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e||"RADIAN"===e?n:"DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e||"DEGREE"===e?n*(180/Math.PI):void 0}},{key:"_mag",value:function(t,e){var n=Math.abs(t.x-e.x),o=Math.abs(t.y-e.y);return Math.sqrt(n*n+o*o)}}]),e}(f.a)},/* 1 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(2),y=/*#__PURE__*/
function(t){function e(){var t;return r(this,e),t=c(this,u(e).call(this)),t.static=!1,t}return h(e,t),s(e,[{key:"move",value:function(){return this.vel=this.acc,this.pos=this.pos.add(this.vel),this}},{key:"applyForce",value:function(t){return!1===this.static?(this.acc=this.acc.add(t),this):(console.log("shape is static, cannot apply force"),this)}}]),e}(f.a)},/* 2 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(){o(this,t)}return i(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,o=t.angle,r=void 0===o?Math.PI/2:o,i=t.code,s=void 0===i?function(){return console.log("rotated by: ".concat(r))}:i,c=n.toUpperCase();return"RAD"===c||"RADS"===c||"R"===c||"RADIANS"===c?(this.ctx.save(),this.ctx.rotate(r),s(),this.ctx.restore(),this):"DEG"===c||"DEGS"===c||"D"===c||"DEGREES"===c?(this.ctx.save(),this.ctx.rotate(r*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return this.pos.x>=e?this.acc.x>0&&(this.acc.x*=-1):this.pos.x<=t&&this.acc.x<0&&(this.acc.x*=-1),this}},{key:"boundY",value:function(t,e){return this.pos.y>=e?this.acc.y>0&&(this.acc.y*=-1):this.pos.y<=t&&this.acc.y<0&&(this.acc.y*=-1),this}},{key:"wrapX",value:function(t,e){return this.pos.x>=e?this.pos.x=t:this.pos.x<=t&&(this.pos.x=e),this}},{key:"wrapY",value:function(t,e){return this.pos.y>=e?this.pos.y=t:this.pos.y<=t&&(this.pos.y=e),this}},{key:"bounceX",value:function(t,e,n){return this.pos.x>=e?(this.acc.x>0&&(this.acc.x*=-n),Math.abs(this.acc.x)<.1&&(this.static=!0)):this.pos.x<=t&&(this.acc.x<0&&(this.acc.x*=-n),Math.abs(this.acc.x)<.1&&(this.static=!0)),this}},{key:"bounceY",value:function(t,e,n){return this.pos.y>=e?(this.acc.y>0&&(this.acc.y*=-n),Math.abs(this.acc.y)<.1&&(this.static=!0)):this.pos.y<=t&&(this.acc.y<0&&(this.acc.y*=-n),Math.abs(this.acc.y)<.1&&(this.static=!0)),this}}]),t}()},/* 3 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(2),y=/*#__PURE__*/
function(t){function e(t,n,o){var i;return r(this,e),i=c(this,u(e).call(this)),i.ctx=t,i.cols=n,i.rows=o,i.grid=[],i}// get data for cell positions (returned as a nested array)
return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=this.ctx.canvas.height,n=0;n<t/this.cols;n++){for(var o={x:t/(t/this.cols)*n,rows:[],index:n},r=0;r<this.rows;r++)o.rows.push({y:e/(e/this.rows)*r,index:r});this.grid.push(o)}return this}},{key:"draw",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.weight,o=void 0===n?1:n,r=e.colour,i=void 0===r?"rgba(127, 127, 127, .4)":r;return this.grid.forEach(function(e){t.ctx.beginPath(),t.ctx.moveTo(e.x,0),t.ctx.lineTo(e.x,t.ctx.canvas.height),t.ctx.strokeStyle=i,t.ctx.lineWidth=o,t.ctx.stroke(),e.rows.forEach(function(n){t.ctx.beginPath(),t.ctx.moveTo(e.x,n.y),t.ctx.lineTo(e.x+t.cols,n.y),t.ctx.strokeStyle=i,t.ctx.lineWidth=o,t.ctx.stroke()})}),this}},{key:"_numCells",value:function(){return this.ctx.canvas.width/this.cols*(this.ctx.canvas.height/this.rows)}},{key:"_cell",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?0:e,o=t.y,r=void 0===o?0:o,i=t.colour,s=void 0===i?"#FFC0CB":i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.grid[n].x,u=this.grid[n].rows[r].y;return"highlight"===c&&(this.ctx.fillStyle=s,this.ctx.fillRect(a,u,this.cols,this.rows)),{x:a,y:u}}}]),e}(f.a)},/* 4 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(e){o(this,t),this.ctx=e,this.x=0,this.y=0}return i(t,[{key:"_pos",value:function(t){var e=this.ctx.canvas.getBoundingClientRect();return this.x=t.clientX-e.left,this.y=t.clientY-e.top,this}}]),t}()},/* 5 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(2),y=n(12),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a,h){var l;return r(this,e),l=c(this,u(e).call(this)),l.ctx=t,l.m=n,l.c=o,l.exp=i,l.path=[],l.sfX=s,l.sfY=a,l.mode=h,l}return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e="cartesian"===this.mode?.5*-t:0,o="cartesian"===this.mode?.5*t:t,r=e;r<o;r++){var i=(this.m*Math.pow(r,this.exp)+this.c)*this.sfY;this.path.push(n.i(y.a)(this.ctx,r*this.sfX,i).draw())}return this}},{key:"draw",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080",e=0;e<this.path.length-1;e++)this.ctx.beginPath(),this.ctx.moveTo(this.path[e].pos.x,this.path[e].pos.y),this.ctx.lineTo(this.path[e+1].pos.x,this.path[e+1].pos.y),this.ctx.strokStyle=t,this.ctx.stroke();return this}}]),e}(f.a)},/* 6 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(2),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a,h,l,f){var p;return r(this,e),p=c(this,u(e).call(this)),p.ctx=t,p.start=new y.a(n,o),p.ctrlPoint1=new y.a(i,s),p.ctrlPoint2=new y.a(a,h),p.end=new y.a(l,f),p}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.bezierCurveTo(this.ctrlPoint1.x,this.ctrlPoint1.y,this.ctrlPoint2.x,this.ctrlPoint2.y,this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(f.a)},/* 7 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var a;return r(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.pos=new y.a(n,o),a.vel=new y.a(s.vel.x,s.vel.y),a.acc=new y.a(s.acc.x,s.acc.y),a.r=i,a}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.PI*(this.r*this.r)}},{key:"_circumf",value:function(){return Math.PI*this.r*2}}]),e}(f.a)},/* 8 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(7);
// create new circle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i)}},/* 9 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(2),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a,h){var l;return r(this,e),l=c(this,u(e).call(this)),l.ctx=t,l.start=new y.a(n,o),l.ctrlPoint=new y.a(i,s),l.end=new y.a(a,h),l}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.quadraticCurveTo(this.ctrlPoint.x,this.ctrlPoint.y,this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(f.a)},/* 10 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(2),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var a;return r(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.start=new y.a(n,o),a.end=new y.a(i,s),a}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.lineTo(this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"_dist",value:function(){var t=Math.abs(this.start.x-this.end.x),e=Math.abs(this.start.y-this.end.y),n=t*t+e*e;return Math.sqrt(n)}},{key:"_grad",value:function(){var t=Math.abs(this.start.x-this.end.x);return Math.abs(this.start.y-this.end.y)/t}},{key:"_xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this._grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){return Math.atan(n)*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"_yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this._xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){return(Math.PI/2-this._xAngle())*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(f.a)},/* 11 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return v});/* harmony import */
var f=n(1),y=n(0),p=n(8),v=/*#__PURE__*/
function(t){function e(t,n,o,i){var s;return r(this,e),s=c(this,u(e).call(this)),s.ctx=t,s.pos=new y.a(n,o),s.vel=new y.a(i.vel.x,i.vel.y),s.acc=new y.a(i.acc.x,i.acc.y),s}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return n.i(p.a)(this.ctx,this.pos.x,this.pos.y,4).outline({weight:1,colour:t}),this}}]),e}(f.a)},/* 12 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(11);/* harmony default export */
e.a=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r)}},/* 13 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a){var h;return r(this,e),h=c(this,u(e).call(this)),h.ctx=t,h.width=i,h.height=s,h.pos=new y.a(n,o),h.vel=new y.a(a.vel.x,a.vel.y),h.acc=new y.a(a.acc.x,a.acc.y),h}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"_area",value:function(){return this.width*this.height}},{key:"_perim",value:function(){return 2*(this.width+this.height)}}]),e}(f.a)},/* 14 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(13);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i,s)}},/* 15 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a,h){var l;return r(this,e),l=c(this,u(e).call(this)),l.ctx=t,l.r=i,l.angle=s,l.size=a,l.pos=new y.a(n,o),l.vel=new y.a(h.vel.x,h.vel.y),l.acc=new y.a(h.acc.x,h.acc.y),l}/* ****
    DESIGN METHODS
  **** */
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(e,n),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,o=t.colour,r=void 0===o?"#808080":o,i=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(i,s),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(f.a)},/* 16 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a,h){var l;return r(this,e),l=c(this,u(e).call(this)),l.ctx=t,l.r=i,l.angle=s,l.endAngle=2*Math.asin(l.chord/(2*l.r)),l.chord=a,l.dir=!1,l.pos=new y.a(n,o),l.vel=new y.a(h.vel.x,h.vel.y),l.acc=new y.a(h.acc.x,h.acc.y),l.chord>2*l.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),l}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return h(e,t),s(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o,i=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+i,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(f.a)},/* 17 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var a;return r(this,e),a=c(this,u(e).call(this)),a.ctx=t,a.side=i,a.height=Math.sqrt(a.side*a.side-.5*a.side*(.5*a.side)),a.pos=new y.a(n,o),a.vel=new y.a(s.vel.x,s.vel.y),a.acc=new y.a(s.acc.x,s.acc.y),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"_perim",value:function(){return 3*this.side}}]),e}(f.a)},/* 18 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a){var h;return r(this,e),h=c(this,u(e).call(this)),h.ctx=t,h.base=i,h.side=s,h.height=Math.sqrt(h.side*h.side-.5*h.base*(.5*h.base)),h.pos=new y.a(n,o),h.vel=new y.a(a.vel.x,a.vel.y),h.acc=new y.a(a.acc.x,a.acc.y),h}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return.5*this.base*this.height*.5*2}},{key:"_perim",value:function(){return 2*this.side+this.base}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),o=Math.asin(this.height/this.side),r=o;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,o=Math.asin(this.height/this.side)*(180/Math.PI),r=o}return[n,o,r]}}]),e}(f.a)},/* 19 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(1),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,a){var h;return r(this,e),h=c(this,u(e).call(this)),h.ctx=t,h.base=i,h.height=s,h.pos=new y.a(n,o),h.vel=new y.a(a.vel.x,a.vel.y),h.acc=new y.a(a.acc.x,a.acc.y),h}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"_area",value:function(){return this.height*this.base*.5}},{key:"_perim",value:function(){return this.base+this.height+this.hyp()}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,o=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),o=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,o,r]}}]),e}(f.a)},/* 20 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(23),r=n(25),i=n(2),s=n(28),c=n(32),a=n(34),u=n(1),h=n(37),l=n(47),f=n(50),y={backgrounds:o.a,globals:r.a,Graphic:i.a,graphs:s.a,helpers:c.a,shape:a.a,Shape:u.a,shapes:h.a,structure:l.a,text:f.a};/* harmony default export */
e.a=y},/* 21 */
/***/
function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});/* harmony import */
var o=n(20),r=o.a.backgrounds,i=o.a.globals,s=o.a.helpers,c=o.a.shapes,a=o.a.structure,u=a.canvas({id:"canvas"}),h=u.c,l=u.height;r.bgsolid(h);// define empty array
var f=[],y=i.vector(0,.1);// on click, draw ball at mouse position, set acceleration & add to balls array
document.getElementById("canvas").addEventListener("click",function(t){var e=i.mouse(h)._pos(t),n=s._random(8,12),o=c.circle(h,e.x,e.y,n);f.push(o)}),a.animate(function(){r.bgsolid(h),f.forEach(function(t){
// draw ball
t.draw().outline(),// is ball is not 'static', animate it
!1===t.static&&(
// gravity is altered according to ball radius to simulate different mass
t.applyForce(i.vector(y.x,t.r/5*y.y)),// set new position vector based on force -> acc -> vel -> pos
t.move(),// prevent ball from going beyond the base of the canvas
// inverse acceleration is 4/5 of original vector.y
t.bounceY(0+t.r,l-t.r,.8))})})},/* 22 */
/***/
function(t,e,n){"use strict";
// draw fill rectangle full size of canvas, colour default to light grey
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",i=t.canvas.clientWidth,s=t.canvas.clientHeight,c=null;switch(o){case"top-left":c=n.i(r.a)(t,0,0,i,s).draw(e);break;case"centre":c=n.i(r.a)(t,.5*-i,.5*-s,i,s).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return c}/* harmony export (immutable) */
e.a=o;/* harmony import */
var r=n(14)},/* 23 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(22),r={bgsolid:o.a};/* harmony default export */
e.a=r},/* 24 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(3);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.cols,r=void 0===n?20:n,i=e.rows,s=void 0===i?20:i;return new o.a(t,r,s)}},/* 25 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(24),r=n(3),i=n(26),s=n(4),c=n(27),a=n(0),u={grid:o.a,mouse:i.a,vector:c.a,Classes:{Grid:r.a,Mouse:s.a,Vector:a.a}};/* harmony default export */
e.a=u},/* 26 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(4);/* harmony default export */
e.a=function(t){return new o.a(t)}},/* 27 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(0);/* harmony default export */
e.a=function(t,e){return new o.a(t,e)}},/* 28 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(29),r=n(5),i={linegraph:o.a,Classes:{Linegraph:r.a}};/* harmony default export */
e.a=i},/* 29 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(5);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.m,r=void 0===n?1:n,i=e.c,s=void 0===i?0:i,c=e.exp,a=void 0===c?1:c,u=e.sfX,h=void 0===u?1:u,l=e.sfY,f=void 0===l?1:l,y=e.mode,p=void 0===y?null:y;return new o.a(t,r,s,a,h,f,p)}},/* 30 */
/***/
function(t,e,n){"use strict";
// convert degrees in to radians
var o=function(t){return t*(Math.PI/180)},r=function(t){return t*(180/Math.PI)};/* harmony default export */
e.a={toRadians:o,toDegrees:r}},/* 31 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=new Date;return{millis:t.getMilliseconds(),seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours(),day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear(),today:t}}},/* 32 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(30),r=n(31),i=n(52),s=n(33),c=n(51),a={_convert:o.a,_date:r.a,_has:i.a,_map:s.a,_random:c.a};/* harmony default export */
e.a=a},/* 33 */
/***/
function(t,e,n){"use strict";
// range_1 = range to be mapped, range_2 = range to be mapped to
/* harmony default export */
e.a=function(t,e,n,o,r){
// get the ranges passed in from minimum and maximum values
var i=Math.abs(e-n),s=Math.abs(o-r),c=e<n?e:n,a=o<r?o:r;if(!(t-c<0))// return that same percentage [line20] value of second range
return s/100*((t-c)/i*100)+a;console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}},/* 34 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(1);/* harmony default export */
e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:42,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return new o.a(t,e,n,r,i,s)}},/* 35 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(6);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,r,i,s,c,a,u){return new o.a(t,e,n,r,i,s,c,a,u)}},/* 36 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(9);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,r,i,s,c){return new o.a(t,e,n,r,i,s,c)}},/* 37 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(35),r=n(6),i=n(8),s=n(7),c=n(36),a=n(9),u=n(38),h=n(10),l=n(12),f=n(11),y=n(14),p=n(13),v=n(39),b=n(15),d=n(40),g=n(16),x=n(41),m=n(17),w=n(42),O=n(18),_=n(43),S=n(19),P={bezier:o.a,circle:i.a,curve:c.a,line:u.a,point:l.a,rect:y.a,sector:v.a,segment:d.a,triangleE:x.a,triangleI:w.a,triangleR:_.a,Classes:{Bezier:r.a,Circle:s.a,Curve:a.a,Line:h.a,Point:f.a,Rect:p.a,Sector:b.a,Segment:g.a,TriangleE:m.a,TriangleI:O.a,TriangleR:S.a}};/* harmony default export */
e.a=P},/* 38 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(10);
// create new line, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,r,i)}},/* 39 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(15);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i,s,c)}},/* 40 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(16);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i,s,c)}},/* 41 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(17);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i)}},/* 42 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(18);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i,s)}},/* 43 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(19);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{vel:{x:0,y:0},acc:{x:0,y:0}};return new o.a(t,e,n,r,i,s)}},/* 44 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=0;return new Promise(function(r,i){var s=setInterval(function(){t(),o++,o===n&&(clearInterval(s),r(o)),18e5===o&&i({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}},/* 45 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t,e){return new Promise(function(n,o){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}},/* 46 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,o=t.height,r=void 0===o?400:o,i=t.id,s=void 0===i?"canvas":i,c=t.el,a=void 0===c?document.body:c,u=document.createElement("canvas");// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return u.width=n,u.height=r,u.id=s,a.appendChild(u),{c:u.getContext("2d"),width:u.width,height:u.height,id:u.id}}},/* 47 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(44),r=n(45),i=n(46),s=n(48),c={animate:o.a,aside:r.a,canvas:i.a,rotate:s.a};/* harmony default export */
e.a=c},/* 48 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,o=void 0===n?"rad":n,r=e.angle,i=void 0===r?Math.PI/2:r,s=e.code,c=void 0===s?function(){return console.log("rotated by: ".concat(i))}:s,a=o.toUpperCase();return new Promise(function(e,n){"RAD"===a||"RADS"===a||"R"===a||"RADIANS"===a?(t.save(),t.rotate(i),c(),t.restore(),e("reset transformations")):"DEG"===a||"DEGS"===a||"D"===a||"DEGREES"===a?(t.save(),t.rotate(i*(Math.PI/180)),c(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}},/* 49 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(2),y=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o,i){var s;return r(this,e),s=c(this,u(e).call(this)),s.ctx=t,s.string=n,s.pos=new y.a(o,i),s}/* ****
    DESIGN METHODS
  **** */
// set alignment
return h(e,t),s(e,[{key:"align",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";return this.ctx.textAlign=t,this}},{key:"baseline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom";return this.ctx.textBaseline=t,this}},{key:"font",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.size,n=void 0===e?"24px":e,o=t.family,r=void 0===o?"Helvetica":o;return this.ctx.font="".concat(n," ").concat(r),this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillText(this.string,this.pos.x,this.pos.y),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeText(this.string,this.pos.x,this.pos.y),this}}]),e}(f.a)},/* 50 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(49);/* harmony default export */
e.a=function(t,e,n,r){return new o.a(t,e,n,r)}},/* 51 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null===t||null===e?Math.random():null!==t&&null!==e?Math.floor(Math.random()*Math.abs(e-t)+t):void 0}},/* 52 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}/* harmony default export */
e.a=function(t,e){if(Array.isArray(t)){if("string"==typeof e)return t.indexOf(e)>=0;if(Array.isArray(e))return e.map(function(e){return t.indexOf(e)>=0});console.log("Error: argument must be of type string or array")}else if("object"===o(t)){if("string"==typeof e)return t.hasOwnProperty(e);if(Array.isArray(e))return e.map(function(e){return t.hasOwnProperty(e)});console.log("Error: argument must be of type string or array")}else console.log("Error: method must be called on array or object")}}]);
//# sourceMappingURL=scripts.js.map