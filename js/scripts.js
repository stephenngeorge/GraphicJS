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
return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=10)}([/* 0 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,r,o){n(this,t),this.ctx=e,this.x=i,this.y=r,this.r=o}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r+i/2,0,2*Math.PI),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),t}();e.default=o},/* 1 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,r,o,s){n(this,t),this.ctx=e,this.xFrom=i,this.yFrom=r,this.xTo=o,this.yTo=s}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.lineWidth=i,this.ctx.moveTo(this.xFrom,this.yFrom),this.ctx.lineTo(this.xTo,this.yTo),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"dist",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo),i=t*t+e*e;return Math.sqrt(i)}}]),t}();e.default=o},/* 2 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,r,o,s){n(this,t),this.ctx=e,this.x=i,this.y=r,this.width=o,this.height=s}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.x-i/2,this.y-i/2,this.width+i,this.height+i),this}}]),t}();e.default=o},/* 3 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
// RIGHT-ANGLE TRIANGLE
Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,r,o,s){n(this,t),this.ctx=e,this.xPos=i,this.yPos=r,this.base=o,this.height=s}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}}]),t}();e.default=o},/* 4 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(2),s=n(o)},/* 5 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(6),o=n(r),s=i(8),u=n(s),h=i(7),l=n(h),c=i(4),a=n(c),f=i(9),d=n(f),v=i(1),y=n(v),x=i(0),g=n(x),b=i(2),p=n(b),P=i(3),w=n(P),_={bgSolid:o.default,line:u.default,circle:l.default,rect:a.default,triangleR:d.default,classes:{Line:y.default,Circle:g.default,Rect:p.default,TriangleR:w.default}};t.exports=_},/* 6 */
/***/
function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,t.width,t.height)}
// draw fill rectangle full size of canvas, colour default to light grey
Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 7 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new s.default(t,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(0),s=n(o)},/* 8 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(1),s=n(o)},/* 9 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(3),s=n(o)},/* 10 */
/***/
function(t,e,i){"use strict";var n=i(5),r=document.getElementById("canvas"),o=r.getContext("2d"),s=r.width,u=r.height;(0,n.bgSolid)(r),(0,n.circle)(o,200,200,50).draw().outline(),(0,n.line)(o,0,0,s,u).draw().dist()}]);
//# sourceMappingURL=scripts.js.map