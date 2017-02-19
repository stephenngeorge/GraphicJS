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
,/* 1 */
,/* 2 */
,/* 3 */
,/* 4 */
,/* 5 */
,/* 6 */
,/* 7 */
,/* 8 */
,/* 9 */
,/* 10 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(15),s=n(r),o=document.getElementById("canvas"),h=o.getContext("2d"),u=o.width,a=o.height,l={weight:3,colour:"#f1f1f1"};s.default.bgSolid(o,"#808080");var c=s.default.circle(h,.5*u,.5*a,48).draw("rgba(200, 0, 100, .4)").outline(l);s.default.rect(h,50,50,u-100,a-100).outline(l),s.default.line(h,0,0,c.circumf(),c.circumf()).draw(l),s.default.line(h,u,0,c.circumf(),c.circumf()).draw(l)},/* 11 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,r,s){n(this,t),this.ctx=e,this.x=i,this.y=r,this.r=s}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"area",value:function(){return Math.PI*(this.r*this.r)}},{key:"circumf",value:function(){return Math.PI*this.r*2}}]),t}();e.default=s},/* 12 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,r,s,o){n(this,t),this.ctx=e,this.xFrom=i,this.yFrom=r,this.xTo=s,this.yTo=o}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.lineWidth=i,this.ctx.moveTo(this.xFrom,this.yFrom),this.ctx.lineTo(this.xTo,this.yTo),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"dist",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo),i=t*t+e*e;return Math.sqrt(i)}},{key:"grad",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo);return e/t}},{key:"xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=this.grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(i);if("DEG"===e||"D"===e||"DEGREES"===e){var n=Math.atan(i);return n*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this.xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){var i=Math.PI/2-this.xAngle();return i*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),t}();e.default=s},/* 13 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,r,s,o){n(this,t),this.ctx=e,this.x=i,this.y=r,this.width=s,this.height=o}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.x,this.y,this.width,this.height),this}},{key:"area",value:function(){return this.width*this.height}},{key:"perim",value:function(){return 2*(this.width+this.height)}}]),t}();e.default=s},/* 14 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
// RIGHT-ANGLE TRIANGLE
Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,r,s,o){n(this,t),this.ctx=e,this.xPos=i,this.yPos=r,this.base=s,this.height=o}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"area",value:function(){return this.height*this.base*.5}},{key:"perim",value:function(){return this.base+this.height+this.hyp()}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i="",n="",r="";if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)i=Math.PI/2,n=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};i=Math.PI/2*(180/Math.PI),n=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[i,n,r]}}]),t}();e.default=s},/* 15 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(16),s=n(r),o=i(18),h=n(o),u=i(17),a=n(u),l=i(19),c=n(l),f=i(20),d=n(f),v=i(12),y=n(v),g=i(11),x=n(g),p=i(13),b=n(p),P=i(14),M=n(P),m={bgSolid:s.default,line:h.default,circle:a.default,rect:c.default,triangleR:d.default,classes:{Line:y.default,Circle:x.default,Rect:b.default,TriangleR:M.default}};t.exports=m},/* 16 */
/***/
function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,t.width,t.height)}
// draw fill rectangle full size of canvas, colour default to light grey
Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 17 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new o.default(t,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var s=i(11),o=n(s)},/* 18 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var s=i(12),o=n(s)},/* 19 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new o.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var s=i(13),o=n(s)},/* 20 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new o.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var s=i(14),o=n(s)}]);
//# sourceMappingURL=scripts.js.map