/******/!function(t){/******/
/******/
// The require function
/******/
function e(n){/******/
/******/
// Check if module is in cache
/******/
if(i[n])/******/
return i[n].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var r=i[n]={/******/
i:n,/******/
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
return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
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
return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){/******/
e.o(t,i)||/******/
Object.defineProperty(t,i,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:n})},e.n=function(t){/******/
var i=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([/* 0 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(8),o=n(r),s=o.default.canvas({el:document.getElementById("canvas-container")});s.c,s.width,s.height,s.id},/* 1 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(){n(this,t)}return r(t,[{key:"cartesian",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,i=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*i,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(i,e);break;case 3:this.ctx.translate(i,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;this.ctx.translate(.5*e,.5*t)}}]),t}();e.default=o},/* 2 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),h=n(u),l=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.x=i,u.y=n,u.width=s,u.height=a,u}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.x,this.y,this.width,this.height),this}},{key:"area",value:function(){return this.width*this.height}},{key:"perim",value:function(){return 2*(this.width+this.height)}}]),e}(h.default);e.default=l},/* 3 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),h=n(u),l=function(t){function e(t,i,n,s){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.x=i,a.y=n,a.r=s,a}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"area",value:function(){return Math.PI*(this.r*this.r)}},{key:"circumf",value:function(){return Math.PI*this.r*2}}]),e}(h.default);e.default=l},/* 4 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),h=n(u),l=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xFrom=i,u.yFrom=n,u.xTo=s,u.yTo=a,u}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.lineWidth=i,this.ctx.moveTo(this.xFrom,this.yFrom),this.ctx.lineTo(this.xTo,this.yTo),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"dist",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo),i=t*t+e*e;return Math.sqrt(i)}},{key:"grad",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo);return e/t}},{key:"xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=this.grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(i);if("DEG"===e||"D"===e||"DEGREES"===e){var n=Math.atan(i);return n*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this.xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){var i=Math.PI/2-this.xAngle();return i*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(h.default);e.default=l},/* 5 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),h=n(u),l=function(t){function e(t,i,n,s){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.xPos=i,a.yPos=n,a.side=s,a.height=Math.sqrt(a.side*a.side-.5*a.side*(.5*a.side)),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.side,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.side,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.side,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.side,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"perim",value:function(){return 3*this.side}}]),e}(h.default);e.default=l},/* 6 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),h=n(u),l=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xPos=i,u.yPos=n,u.base=s,u.side=a,u.height=Math.sqrt(u.side*u.side-.5*u.base*(.5*u.base)),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.base,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.base,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.base,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return.5*this.base*this.height*.5*2}},{key:"perim",value:function(){return 2*this.side+this.base}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=null,n=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)i=2*Math.asin(.5*this.base/this.side),n=Math.asin(this.height/this.side),r=n;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};i=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,n=Math.asin(this.height/this.side)*(180/Math.PI),r=n}return[i,n,r]}}]),e}(h.default);e.default=l},/* 7 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),h=n(u),l=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xPos=i,u.yPos=n,u.base=s,u.height=a,u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"area",value:function(){return this.height*this.base*.5}},{key:"perim",value:function(){return this.base+this.height+this.hyp()}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=null,n=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)i=Math.PI/2,n=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};i=Math.PI/2*(180/Math.PI),n=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[i,n,r]}}]),e}(h.default);e.default=l},/* 8 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(9),o=n(r),s=i(11),a=n(s),u=i(10),h=n(u),l=i(13),c=n(l),f=i(12),d=n(f),v=i(14),y=n(v),p=i(17),b=n(p),g=i(15),x=n(g),P=i(16),_=n(P),w=i(4),O=n(w),m=i(3),M=n(m),k=i(2),j=n(k),E=i(7),R=n(E),T=i(5),S=n(T),D=i(6),I=n(D),C={animate:o.default,canvas:a.default,bgSolid:h.default,line:c.default,circle:d.default,rect:y.default,triangleR:b.default,triangleE:x.default,triangleI:_.default,classes:{Line:O.default,Circle:M.default,Rect:j.default,TriangleR:R.default,TriangleE:S.default,TriangleI:I.default}};t.exports=C},/* 9 */
/***/
function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=0;return new Promise(function(r,o){var s=setInterval(function(){t(),n++,n===i&&(clearInterval(s),r(n)),18e5===n&&o({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 10 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// draw fill rectangle full size of canvas, colour default to light grey
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",n=t.canvas.clientWidth,r=t.canvas.clientHeight,o=null;switch(i){case"top-left":o=new s.default(t,0,0,n,r).draw(e);break;case"centre":o=new s.default(t,.5*-n,.5*-r,n,r).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(2),s=n(o)},/* 11 */
/***/
function(t,e,i){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,i=void 0===e?600:e,n=t.height,r=void 0===n?400:n,o=t.id,s=void 0===o?"canvas":o,a=t.el,u=void 0===a?document.body:a,h=document.createElement("canvas");
// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return h.width=i,h.height=r,h.id=s,u.appendChild(h),{c:h.getContext("2d"),width:h.width,height:h.height,id:h.id}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 12 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new s.default(t,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(3),s=n(o)},/* 13 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(4),s=n(o)},/* 14 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(2),s=n(o)},/* 15 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new s.default(t,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(5),s=n(o)},/* 16 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(6),s=n(o)},/* 17 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(7),s=n(o)}]);
//# sourceMappingURL=scripts.js.map