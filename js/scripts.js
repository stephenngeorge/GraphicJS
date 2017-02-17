/******/!function(t){/******/
// The require function
/******/
function e(n){/******/
// Check if module is in cache
/******/
if(i[n])/******/
return i[n].exports;/******/
// Create a new module (and put it into the cache)
/******/
var r=i[n]={/******/
i:n,/******/
l:!1,/******/
exports:{}};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
/******/
// define getter function for harmony exports
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
// Object.prototype.hasOwnProperty.call
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
return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=6)}([/* 0 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.xPos,n=void 0===i?42:i,r=e.yPos,o=void 0===r?42:r,l=e.width,c=void 0===l?42:l,s=e.height,a=void 0===s?42:s;return new u.default(t,n,o,c,a)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(3),u=n(o)},/* 1 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(4),o=n(r),u=i(5),l=n(u),c=i(0),s=n(c),a={backgroundSolid:o.default,circle:l.default,rect:s.default};t.exports=a},/* 2 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,r,o){n(this,t),this.ctx=e,this.x=i,this.y=r,this.r=o}return r(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.lineWidth,i=void 0===e?2:e,n=t.strokeStyle,r=void 0===n?"grey":n,o=t.fillStyle,u=void 0===o?"pink":o;return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle=u,this.ctx.fill(),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),t}();e.default=o},/* 3 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(0),l=(n(u),function(){function t(e,i,n,o,u){r(this,t),this.ctx=e,this.x=i,this.y=n,this.width=o,this.height=u}return o(t,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pink";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";return this.ctx.lineWidth=t,this.ctx.strokeStyle=e,this.ctx.strokeRect(this.x,this.y,this.width,this.height),this}}]),t}());e.default=l},/* 4 */
/***/
function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,t.width,t.height)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 5 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.xPos,n=void 0===i?42:i,r=e.yPos,o=void 0===r?42:r,l=e.radius,c=void 0===l?21:l;return new u.default(t,n,o,c)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(2),u=n(o)},/* 6 */
/***/
function(t,e,i){"use strict";var n=i(1),r=document.getElementById("canvas"),o=r.getContext("2d");(0,n.backgroundSolid)(r,"rgba(200, 0, 100, .4)"),(0,n.circle)(o,{xPos:200,yPos:200,radius:110}).draw({lineWidth:5,strokeStyle:"#000000",fillStyle:"#e7e7e7"}),(0,n.rect)(o,{xPos:300,yPos:50,width:72,height:80}).draw("#e7e7e7").outline(5,"#000000")}]);