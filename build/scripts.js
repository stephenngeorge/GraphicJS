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
e.p="/",e(e.s=18)}([/* 0 */
/***/
function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}/* harmony export (binding) */
n.d(e,"a",function(){return s});var s=/*#__PURE__*/
function(){function t(){o(this,t)}return i(t,[{key:"cartesian",/* ****
      TRANSFORMATION METHODS
    **** */
value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,n=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*n,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(n,e);break;case 3:this.ctx.translate(n,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,n=void 0===e?"rad":e,o=t.angle,r=void 0===o?Math.PI/2:o,i=t.code,s=void 0===i?function(){return console.log("rotated by: ".concat(r))}:i,c=n.toUpperCase();return"RAD"===c||"RADS"===c||"R"===c||"RADIANS"===c?(this.ctx.save(),this.ctx.rotate(r),s(),this.ctx.restore(),this):"DEG"===c||"DEGS"===c||"D"===c||"DEGREES"===c?(this.ctx.save(),this.ctx.rotate(r*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}},{key:"boundX",value:function(t,e){return(this.pos.x>=e||this.pos.x<=t)&&(this.vel.x*=-1),this}},{key:"boundY",value:function(t,e){return(this.pos.y>=e||this.pos.y<=t)&&(this.vel.y*=-1),this}},{key:"wrapX",value:function(t,e){return this.pos.x>=e?this.pos.x=t:this.pos.x<=t&&(this.pos.x=e),this}},{key:"wrapY",value:function(t,e){return this.pos.y>=e?this.pos.y=t:this.pos.y<=t&&(this.pos.y=e),this}}]),t}()},/* 1 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(0),p=/*#__PURE__*/
function(t){function e(t,n){var o;return r(this,e),o=c(this,a(e).call(this)),o.x=t,o.y=n,o}// copy the vector instead of mutating, preserves the original
return h(e,t),s(e,[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"mag",value:function(t){var e=Math.sqrt(this.x*this.x+this.y*this.y)*t,n=Math.atan(this.y/this.x);return this.x=Math.cos(n)*e,this.y=Math.sin(n)*e,this}},{key:"_heading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=Math.atan(this.y/this.x);return"RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e||"RADIAN"===e?n:"DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e||"DEGREE"===e?n*(180/Math.PI):void 0}}]),e}(f.a)},/* 2 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var u;return r(this,e),u=c(this,a(e).call(this,n,o)),u.ctx=t,u.width=i,u.height=s,u}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.pos.x,this.pos.y,this.width,this.height),this}},{key:"_area",value:function(){return this.width*this.height}},{key:"_perim",value:function(){return 2*(this.width+this.height)}}]),e}(f.a)},/* 3 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(0),p=/*#__PURE__*/
function(t){function e(t,n,o){var i;return r(this,e),i=c(this,a(e).call(this)),i.ctx=t,i.cols=n,i.rows=o,i.grid=[],i}// get data for cell positions (returned as a nested array)
return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e=this.ctx.canvas.height,n=0;n<t/this.cols;n++){for(var o={x:t/(t/this.cols)*n,rows:[],index:n},r=0;r<this.rows;r++)o.rows.push({y:e/(e/this.rows)*r,index:r});this.grid.push(o)}return this}},{key:"draw",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.weight,o=void 0===n?1:n,r=e.colour,i=void 0===r?"rgba(127, 127, 127, .4)":r;return this.grid.forEach(function(e){t.ctx.beginPath(),t.ctx.moveTo(e.x,0),t.ctx.lineTo(e.x,t.ctx.canvas.height),t.ctx.strokeStyle=i,t.ctx.lineWidth=o,t.ctx.stroke(),e.rows.forEach(function(n){t.ctx.beginPath(),t.ctx.moveTo(e.x,n.y),t.ctx.lineTo(e.x+t.cols,n.y),t.ctx.strokeStyle=i,t.ctx.lineWidth=o,t.ctx.stroke()})}),this}},{key:"_numCells",value:function(){return this.ctx.canvas.width/this.cols*(this.ctx.canvas.height/this.rows)}},{key:"_cell",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?0:e,o=t.y,r=void 0===o?0:o,i=t.colour,s=void 0===i?"#FFC0CB":i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,u=this.grid[n].x,a=this.grid[n].rows[r].y;return"highlight"===c&&(this.ctx.fillStyle=s,this.ctx.fillRect(u,a,this.cols,this.rows)),{x:u,y:a}}}]),e}(f.a)},/* 4 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),p=n(11),y=/*#__PURE__*/
function(t){function e(t,n,o,i,s,u,h){var l;return r(this,e),l=c(this,a(e).call(this)),l.ctx=t,l.m=n,l.c=o,l.exp=i,l.path=[],l.sfX=s,l.sfY=u,l.mode=h,l}return h(e,t),s(e,[{key:"calc",value:function(){for(var t=this.ctx.canvas.width,e="cartesian"===this.mode?.5*-t:0,o="cartesian"===this.mode?.5*t:t,r=e;r<o;r++){var i=(this.m*Math.pow(r,this.exp)+this.c)*this.sfY;this.path.push(n.i(p.a)(this.ctx,r*this.sfX,i).draw())}return this}},{key:"draw",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080",e=0;e<this.path.length-1;e++)this.ctx.beginPath(),this.ctx.moveTo(this.path[e].pos.x,this.path[e].pos.y),this.ctx.lineTo(this.path[e+1].pos.x,this.path[e+1].pos.y),this.ctx.strokStyle=t,this.ctx.stroke();return this}}]),e}(f.a)},/* 5 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),p=n(1),y=/*#__PURE__*/
function(t){function e(t,n,o,i,s,u,h,l,f){var y;return r(this,e),y=c(this,a(e).call(this)),y.ctx=t,y.start=new p.a(n,o),y.ctrlPoint1=new p.a(i,s),y.ctrlPoint2=new p.a(u,h),y.end=new p.a(l,f),y}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.bezierCurveTo(this.ctrlPoint1.x,this.ctrlPoint1.y,this.ctrlPoint2.x,this.ctrlPoint2.y,this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(f.a)},/* 6 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i){var s;return r(this,e),s=c(this,a(e).call(this,n,o)),s.ctx=t,s.r=i,s}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.PI*(this.r*this.r)}},{key:"_circumf",value:function(){return Math.PI*this.r*2}}]),e}(f.a)},/* 7 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(6);
// create new circle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new o.a(t,e,n,r)}},/* 8 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),p=n(1),y=/*#__PURE__*/
function(t){function e(t,n,o,i,s,u,h){var l;return r(this,e),l=c(this,a(e).call(this)),l.ctx=t,l.start=new p.a(n,o),l.ctrlPoint=new p.a(i,s),l.end=new p.a(u,h),l}/* ****
    DESIGN METHODS
  **** */
// draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.quadraticCurveTo(this.ctrlPoint.x,this.ctrlPoint.y,this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(f.a)},/* 9 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),p=n(1),y=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var u;return r(this,e),u=c(this,a(e).call(this)),u.ctx=t,u.start=new p.a(n,o),u.end=new p.a(i,s),u}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.lineWidth=n,this.ctx.moveTo(this.start.x,this.start.y),this.ctx.lineTo(this.end.x,this.end.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"_dist",value:function(){var t=Math.abs(this.start.x-this.end.x),e=Math.abs(this.start.y-this.end.y),n=t*t+e*e;return Math.sqrt(n)}},{key:"_grad",value:function(){var t=Math.abs(this.start.x-this.end.x);return Math.abs(this.start.y-this.end.y)/t}},{key:"_xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=this._grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(n);if("DEG"===e||"D"===e||"DEGREES"===e){return Math.atan(n)*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"_yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this._xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){return(Math.PI/2-this._xAngle())*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(f.a)},/* 10 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(47),p=n(7),y=/*#__PURE__*/
function(t){function e(t,n,o){var i;return r(this,e),i=c(this,a(e).call(this,n,o)),i.ctx=t,i}/* ****
    DESIGN METHODS
  **** */
// draw point (1 pixel of colour)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#808080";return this.ctx.fillStyle=t,this.ctx.fillRect(this.pos.x,this.pos.y,1,1),this}},{key:"spotlight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255, 255, 255, .5)";return n.i(p.a)(this.ctx,this.pos.x,this.pos.y,4).outline({weight:1,colour:t}),this}}]),e}(f.a)},/* 11 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(10);/* harmony default export */
e.a=function(t,e,n){return new o.a(t,e,n)}},/* 12 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,u){var h;return r(this,e),h=c(this,a(e).call(this,n,o)),h.ctx=t,h.r=i,h.angle=s,h.size=u,h}/* ****
    DESIGN METHODS
  **** */
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=Math.cos(this.angle)*this.r,n=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(e,n),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?3:e,o=t.colour,r=void 0===o?"#808080":o,i=Math.cos(this.angle)*this.r,s=Math.sin(this.angle)*this.r;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(i,s),this.ctx.arc(this.pos.x,this.pos.y,this.r,this.angle,this.angle+this.size),this.ctx.moveTo(0,0),this.ctx.save(),this.ctx.rotate(this.angle+this.size-Math.PI/2),this.ctx.lineTo(this.pos.x,this.r),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.restore(),this}}]),e}(f.a)},/* 13 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s,u){var h;return r(this,e),h=c(this,a(e).call(this,n,o)),h.ctx=t,h.r=i,h.angle=s,h.endAngle=2*Math.asin(h.chord/(2*h.r)),h.chord=u,h.dir=!1,h.chord>2*h.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),h}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return h(e,t),s(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+this.endAngle,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o,i=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.pos.x+this.r,this.pos.y,this.r,this.angle,this.angle+i,this.dir),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(f.a)},/* 14 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i){var s;return r(this,e),s=c(this,a(e).call(this,n,o)),s.ctx=t,s.side=i,s.height=Math.sqrt(s.side*s.side-.5*s.side*(.5*s.side)),s}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.side,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.side,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"_perim",value:function(){return 3*this.side}}]),e}(f.a)},/* 15 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var u;return r(this,e),u=c(this,a(e).call(this,n,o)),u.ctx=t,u.base=i,u.side=s,u.height=Math.sqrt(u.side*u.side-.5*u.base*(.5*u.base)),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x-.5*this.base,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+.5*this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_area",value:function(){return.5*this.base*this.height*.5*2}},{key:"_perim",value:function(){return 2*this.side+this.base}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=2*Math.asin(.5*this.base/this.side),o=Math.asin(this.height/this.side),r=o;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,o=Math.asin(this.height/this.side)*(180/Math.PI),r=o}return[n,o,r]}}]),e}(f.a)},/* 16 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return p});/* harmony import */
var f=n(47),p=/*#__PURE__*/
function(t){function e(t,n,o,i,s){var u;return r(this,e),u=c(this,a(e).call(this,n,o)),u.ctx=t,u.base=i,u.height=s,u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return h(e,t),s(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.beginPath(),this.ctx.moveTo(this.pos.x,this.pos.y),this.ctx.lineTo(this.pos.x,this.pos.y+this.height),this.ctx.lineTo(this.pos.x+this.base,this.pos.y+this.height),this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"_hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"_area",value:function(){return this.height*this.base*.5}},{key:"_perim",value:function(){return this.base+this.height+this.hyp()}},{key:"_angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),n=null,o=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)n=Math.PI/2,o=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};n=Math.PI/2*(180/Math.PI),o=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[n,o,r]}}]),e}(f.a)},/* 17 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(20),r=n(22),i=n(0),s=n(24),c=n(28),u=n(48),a=n(47),h=n(32),l=n(43),f=n(46),p={backgrounds:o.a,globals:r.a,Graphic:i.a,graphs:s.a,helpers:c.a,shape:u.a,Shape:a.a,shapes:h.a,structure:l.a,text:f.a};/* harmony default export */
e.a=p},/* 18 */
/***/
function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});/* harmony import */
var o=n(17),r=o.a.backgrounds,i=o.a.globals,s=o.a.helpers,c=o.a.shapes,u=o.a.structure,a=u.canvas({width:400,height:400,id:"canvas"}),h=a.c,l=a.width,f=a.height,p=c.circle(h,l/2,f/2,8);p.history=[],u.animate(function(){
// redraw background
r.bgsolid(h),// add current ball position to history array
p.history.push(p.pos.copy()),// limit history array to 100 items
p.history.length>200&&p.history.shift(),// draw circle at each position in history
p.history.forEach(function(t){
// set colour values based on pos co-ordinates
var e=s._map(t.x,0,l,0,255),n=s._map(t.y,0,f,0,255);// draw circle with values determined above
c.circle(h,t.x,t.y,8).draw("rgba(".concat(e,", 0, ").concat(n,", .6)"))});// randomly create vector to be added to ball position
var t=Math.random();p.vel=t<=1/8?i.vector(0,16):t<=.25?i.vector(16,16):t<=3/8?i.vector(16,0):t<=.5?i.vector(16,-16):t<=5/8?i.vector(0,-16):t<=.75?i.vector(-16,-16):t<=7/8?i.vector(-16,0):i.vector(-16,16),// draw ball at new position
p.move().draw("#333").outline({weight:2,colour:"#fff"}).wrapX(0+p.r,l-p.r).wrapY(0+p.r,f-p.r)},10)},/* 19 */
/***/
function(t,e,n){"use strict";
// draw fill rectangle full size of canvas, colour default to light grey
function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",o=t.canvas.clientWidth,i=t.canvas.clientHeight,s=null;switch(n){case"top-left":s=new r.a(t,0,0,o,i).draw(e);break;case"centre":s=new r.a(t,.5*-o,.5*-i,o,i).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return s}/* harmony export (immutable) */
e.a=o;/* harmony import */
var r=n(2)},/* 20 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(19),r={bgsolid:o.a};/* harmony default export */
e.a=r},/* 21 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(3);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.cols,r=void 0===n?20:n,i=e.rows,s=void 0===i?20:i;return new o.a(t,r,s)}},/* 22 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(23),r=n(1),i=n(21),s=n(3),c={grid:i.a,vector:o.a,Classes:{Grid:s.a,Vector:r.a}};/* harmony default export */
e.a=c},/* 23 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(1);/* harmony default export */
e.a=function(t,e){return new o.a(t,e)}},/* 24 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(25),r=n(4),i={linegraph:o.a,Classes:{Linegraph:r.a}};/* harmony default export */
e.a=i},/* 25 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(4);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.m,r=void 0===n?1:n,i=e.c,s=void 0===i?0:i,c=e.exp,u=void 0===c?1:c,a=e.sfX,h=void 0===a?1:a,l=e.sfY,f=void 0===l?1:l,p=e.mode,y=void 0===p?null:p;return new o.a(t,r,s,u,h,f,y)}},/* 26 */
/***/
function(t,e,n){"use strict";
// convert degrees in to radians
var o=function(t){return t*(Math.PI/180)},r=function(t){return t*(180/Math.PI)};/* harmony default export */
e.a={toRadians:o,toDegrees:r}},/* 27 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=new Date;return{millis:t.getMilliseconds(),seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours(),day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear(),today:t}}},/* 28 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(26),r=n(27),i=n(29),s={_convert:o.a,_date:r.a,_map:i.a};/* harmony default export */
e.a=s},/* 29 */
/***/
function(t,e,n){"use strict";
// range_1 = range to be mapped, range_2 = range to be mapped to
/* harmony default export */
e.a=function(t,e,n,o,r){
// get the ranges passed in from minimum and maximum values
var i=Math.abs(e-n),s=Math.abs(o-r),c=e<n?e:n,u=o<r?o:r;if(!(t-c<0))// return that same percentage [line20] value of second range
return s/100*((t-c)/i*100)+u;console.error({status:"ERROR",message:"Could not calculate - the initial value must be within the first range"})}},/* 30 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(5);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,r,i,s,c,u,a){return new o.a(t,e,n,r,i,s,c,u,a)}},/* 31 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(8);
// create new Bezier, draw to the given context
/* harmony default export */
e.a=function(t,e,n,r,i,s,c){return new o.a(t,e,n,r,i,s,c)}},/* 32 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(30),r=n(5),i=n(7),s=n(6),c=n(31),u=n(8),a=n(33),h=n(9),l=n(11),f=n(10),p=n(34),y=n(2),v=n(35),b=n(12),d=n(36),g=n(13),x=n(37),m=n(14),w=n(38),O=n(15),_=n(39),S=n(16),P={bezier:o.a,circle:i.a,curve:c.a,line:a.a,point:l.a,rect:p.a,sector:v.a,segment:d.a,triangleE:x.a,triangleI:w.a,triangleR:_.a,Classes:{Bezier:r.a,Circle:s.a,Curve:u.a,Line:h.a,Point:f.a,Rect:y.a,Sector:b.a,Segment:g.a,TriangleE:m.a,TriangleI:O.a,TriangleR:S.a}};/* harmony default export */
e.a=P},/* 33 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(9);
// create new line, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,r,i)}},/* 34 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(2);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,r,i)}},/* 35 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(12);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.PI/2;return new o.a(t,e,n,r,i,s)}},/* 36 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(13);/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new o.a(t,e,n,r,i,s)}},/* 37 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(14);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new o.a(t,e,n,r)}},/* 38 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(15);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.a(t,e,n,r,i)}},/* 39 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(16);
// create new right-angled triangle, draw to the given context
/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new o.a(t,e,n,r,i)}},/* 40 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=0;return new Promise(function(r,i){var s=setInterval(function(){t(),o++,o===n&&(clearInterval(s),r(o)),18e5===o&&i({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}},/* 41 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t,e){return new Promise(function(n,o){t.save(),e(),t.restore(),n({status:"RESOLVED",message:"aside completed"})})}},/* 42 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?600:e,o=t.height,r=void 0===o?400:o,i=t.id,s=void 0===i?"canvas":i,c=t.el,u=void 0===c?document.body:c,a=document.createElement("canvas");// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return a.width=n,a.height=r,a.id=s,u.appendChild(a),{c:a.getContext("2d"),width:a.width,height:a.height,id:a.id}}},/* 43 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(40),r=n(41),i=n(42),s=n(44),c={animate:o.a,aside:r.a,canvas:i.a,rotate:s.a};/* harmony default export */
e.a=c},/* 44 */
/***/
function(t,e,n){"use strict";/* harmony default export */
e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.units,o=void 0===n?"rad":n,r=e.angle,i=void 0===r?Math.PI/2:r,s=e.code,c=void 0===s?function(){return console.log("rotated by: ".concat(i))}:s,u=o.toUpperCase();return new Promise(function(e,n){"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(t.save(),t.rotate(i),c(),t.restore(),e("reset transformations")):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(t.save(),t.rotate(i*(Math.PI/180)),c(),t.restore(),e("reset transformations")):n({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}},/* 45 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),p=n(1),y=/*#__PURE__*/
function(t){function e(t,n,o,i){var s;return r(this,e),s=c(this,a(e).call(this)),s.ctx=t,s.string=n,s.pos=new p.a(o,i),s}/* ****
    DESIGN METHODS
  **** */
// set alignment
return h(e,t),s(e,[{key:"align",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";return this.ctx.textAlign=t,this}},{key:"baseline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom";return this.ctx.textBaseline=t,this}},{key:"font",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.size,n=void 0===e?"24px":e,o=t.family,r=void 0===o?"Helvetica":o;return this.ctx.font="".concat(n," ").concat(r),this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillText(this.string,this.pos.x,this.pos.y),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,n=void 0===e?2:e,o=t.colour,r=void 0===o?"#808080":o;return this.ctx.lineWidth=n,this.ctx.strokeStyle=r,this.ctx.strokeText(this.string,this.pos.x,this.pos.y),this}}]),e}(f.a)},/* 46 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(45);/* harmony default export */
e.a=function(t,e,n,r){return new o.a(t,e,n,r)}},/* 47 */
/***/
function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}/* harmony export (binding) */
n.d(e,"a",function(){return y});/* harmony import */
var f=n(0),p=n(1),y=/*#__PURE__*/
function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:42,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return r(this,e),t=c(this,a(e).call(this)),t.pos=new p.a(n,o),t.vel=new p.a(i,s),t.acc=new p.a(u,h),t}return h(e,t),s(e,[{key:"move",value:function(){return this.vel.add(this.acc),this.pos.add(this.vel),this}}]),e}(f.a)},/* 48 */
/***/
function(t,e,n){"use strict";/* harmony import */
var o=n(47);/* harmony default export */
e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:42,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return new o.a(t,e,n,r,i,s)}}]);
//# sourceMappingURL=scripts.js.map