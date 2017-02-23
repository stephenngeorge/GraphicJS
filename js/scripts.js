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
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(8),o=n(r),s=i(41),a=o.default.canvas({el:document.getElementById("canvas-container")}),u=a.c;a.width,a.height,a.id;o.default.bgSolid(u).centre();var l=o.default.circle(u,0,0,40).outline(s.outlines);l.rotate({units:"d",angle:45,code:function(){return o.default.line(u,0,0,100,0).draw(s.outlines)}}),o.default.line(u,-50,0,200,0).draw(s.outlines)},/* 1 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(){n(this,t)}return r(t,[{key:"cartesian",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.ctx.canvas.clientHeight,i=this.ctx.canvas.clientWidth;switch(t){case 0:this.ctx.translate(.5*i,.5*e);break;case 1:this.ctx.translate(0,e);break;case 2:this.ctx.translate(i,e);break;case 3:this.ctx.translate(i,0);break;case 4:break;default:console.log({status:"ERROR",message:"invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info"})}return this.ctx.transform(1,0,0,-1,0,0),this}},{key:"centre",value:function(){var t=this.ctx.canvas.clientHeight,e=this.ctx.canvas.clientWidth;return this.ctx.translate(.5*e,.5*t),this}},{key:"rotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.units,i=void 0===e?"rad":e,n=t.angle,r=void 0===n?Math.PI/2:n,o=t.code,s=void 0===o?function(){return console.log("rotated by: "+r)}:o,a=i.toUpperCase();return"RAD"===a||"RADS"===a||"R"===a||"RADIANS"===a?(this.ctx.save(),this.ctx.rotate(r),s(),this.ctx.restore(),this):"DEG"===a||"DEGS"===a||"D"===a||"DEGREES"===a?(this.ctx.save(),this.ctx.rotate(r*(Math.PI/180)),s(),this.ctx.restore(),this):(console.log({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'}),this)}}]),t}();e.default=o},/* 2 */
,/* 3 */
,/* 4 */
,/* 5 */
,/* 6 */
,/* 7 */
,/* 8 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(30),o=n(r),s=i(32),a=n(s),u=i(31),l=n(u),h=i(33),c=n(h),f=i(35),d=n(f),v=i(37),p=n(v),y=i(34),g=n(y),b=i(36),x=n(b),P=i(40),_=n(P),w=i(38),m=n(w),O=i(39),M=n(O),R=i(1),E=n(R),j=i(25),k=n(j),T=i(26),S=n(T),D=i(24),I=n(D),C=i(23),A=n(C),F=i(29),G=n(F),W=i(27),N=n(W),q=i(28),B=n(q),U={animate:o.default,rotate:a.default,canvas:l.default,bgSolid:c.default,line:d.default,segment:p.default,circle:g.default,rect:x.default,triangleR:_.default,triangleE:m.default,triangleI:M.default,classes:{Graphic:E.default,Line:k.default,Segment:S.default,Circle:I.default,Rect:A.default,TriangleR:G.default,TriangleE:N.default,TriangleI:B.default}};t.exports=U},/* 9 */
,/* 10 */
,/* 11 */
,/* 12 */
,/* 13 */
,/* 14 */
,/* 15 */
,/* 16 */
,/* 17 */
,/* 18 */
,/* 19 */
,/* 20 */
,/* 21 */
,/* 22 */
,/* 23 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.x=i,u.y=n,u.width=s,u.height=a,u}/* ****
    DESIGN METHODS
  **** */
// draw rectangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.fillStyle=t,this.ctx.fillRect(this.x,this.y,this.width,this.height),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.strokeRect(this.x,this.y,this.width,this.height),this}},{key:"area",value:function(){return this.width*this.height}},{key:"perim",value:function(){return 2*(this.width+this.height)}}]),e}(l.default);e.default=h},/* 24 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.x=i,a.y=n,a.r=s,a}/* ****
    DESIGN METHODS
  **** */
// draw circle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"area",value:function(){return Math.PI*(this.r*this.r)}},{key:"circumf",value:function(){return Math.PI*this.r*2}}]),e}(l.default);e.default=h},/* 25 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xFrom=i,u.yFrom=n,u.xTo=s,u.yTo=a,u}/* ****
    DESIGN METHODS
  **** */
// draw line to canvas
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.lineWidth=i,this.ctx.moveTo(this.xFrom,this.yFrom),this.ctx.lineTo(this.xTo,this.yTo),this.ctx.strokeStyle=r,this.ctx.stroke(),this}},{key:"dist",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo),i=t*t+e*e;return Math.sqrt(i)}},{key:"grad",value:function(){var t=Math.abs(this.xFrom-this.xTo),e=Math.abs(this.yFrom-this.yTo);return e/t}},{key:"xAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=this.grad();if("RAD"===e||"R"===e||"RADIANS"===e)return Math.atan(i);if("DEG"===e||"D"===e||"DEGREES"===e){var n=Math.atan(i);return n*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}},{key:"yAngle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase();if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)return Math.PI/2-this.xAngle();if("DEG"===e||"DEGS"===e||"D"===e||"DEGREES"===e){var i=Math.PI/2-this.xAngle();return i*(180/Math.PI)}return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'}}}]),e}(l.default);e.default=h},/* 26 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s,a,u){r(this,e);var l=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return l.ctx=t,l.x=i,l.y=n,l.r=s,l.angle=a,l.chord=u,l.dir=!1,l.chord>2*l.r&&console.log({status:"ERROR",message:"mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information"}),l}/* ****
    DESIGN METHODS
  **** */
// set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
// MUST BE CALLED BEFORE OTHER DESIGN METHODS
return s(e,t),a(e,[{key:"invert",value:function(){return this.dir=!this.dir,this}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB",e=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.x+this.r,this.y,this.r,this.angle,this.angle+e,this.dir),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n,o=2*Math.asin(this.chord/(2*this.r));return this.ctx.beginPath(),this.ctx.arc(this.x+this.r,this.y,this.r,this.angle,this.angle+o,this.dir),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.stroke(),this}}]),e}(l.default);e.default=h},/* 27 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s){r(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.ctx=t,a.xPos=i,a.yPos=n,a.side=s,a.height=Math.sqrt(a.side*a.side-.5*a.side*(.5*a.side)),a}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.side,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.side,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.side,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.side,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return Math.sqrt(3)*(this.side*this.side)*.25}},{key:"perim",value:function(){return 3*this.side}}]),e}(l.default);e.default=h},/* 28 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xPos=i,u.yPos=n,u.base=s,u.side=a,u.height=Math.sqrt(u.side*u.side-.5*u.base*(.5*u.base)),u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.base,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos-.5*this.base,this.yPos+this.height),this.ctx.lineTo(this.xPos+.5*this.base,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"area",value:function(){return.5*this.base*this.height*.5*2}},{key:"perim",value:function(){return 2*this.side+this.base}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=null,n=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)i=2*Math.asin(.5*this.base/this.side),n=Math.asin(this.height/this.side),r=n;else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};i=Math.asin(.5*this.base/this.side)*(180/Math.PI)*2,n=Math.asin(this.height/this.side)*(180/Math.PI),r=n}return[i,n,r]}}]),e}(l.default);e.default=h},/* 29 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i(1),l=n(u),h=function(t){function e(t,i,n,s,a){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.ctx=t,u.xPos=i,u.yPos=n,u.base=s,u.height=a,u}/* ****
    DESIGN METHODS
  **** */
// draw triangle to canvas with fill colour (no stroke)
return s(e,t),a(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC0CB";return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.fillStyle=t,this.ctx.fill(),this}},{key:"outline",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.weight,i=void 0===e?2:e,n=t.colour,r=void 0===n?"#808080":n;return this.ctx.beginPath(),this.ctx.moveTo(this.xPos,this.yPos),this.ctx.lineTo(this.xPos,this.yPos+this.height),this.ctx.lineTo(this.xPos+this.base,this.yPos+this.height),this.ctx.lineWidth=i,this.ctx.strokeStyle=r,this.ctx.closePath(),this.ctx.stroke(),this}},{key:"hyp",value:function(){return Math.sqrt(this.base*this.base+this.height*this.height)}},{key:"area",value:function(){return this.height*this.base*.5}},{key:"perim",value:function(){return this.base+this.height+this.hyp()}},{key:"angles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rad",e=t.toUpperCase(),i=null,n=null,r=null;if("RAD"===e||"RADS"===e||"R"===e||"RADIANS"===e)i=Math.PI/2,n=Math.asin(this.base/this.hyp()),r=Math.asin(this.height/this.hyp());else{if("DEG"!==e&&"DEGS"!==e&&"D"!==e&&"DEGREES"!==e)return{status:"ERROR",message:'the mode you have passed is not recognised, please specify "deg" or "rad"'};i=Math.PI/2*(180/Math.PI),n=Math.asin(this.base/this.hyp())*(180/Math.PI),r=Math.asin(this.height/this.hyp())*(180/Math.PI)}return[i,n,r]}}]),e}(l.default);e.default=h},/* 30 */
/***/
function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=0;return new Promise(function(r,o){var s=setInterval(function(){t(),n++,n===i&&(clearInterval(s),r(n)),18e5===n&&o({status:"ANIMATION STOPPED",message:"animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs"})},1e3/e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 31 */
/***/
function(t,e,i){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,i=void 0===e?600:e,n=t.height,r=void 0===n?400:n,o=t.id,s=void 0===o?"canvas":o,a=t.el,u=void 0===a?document.body:a,l=document.createElement("canvas");
// return object with canvas data
// set canvas attributes (defaults declared in function params)
// insert canvas element into DOM, attached to passed element (document body by default)
return l.width=i,l.height=r,l.id=s,u.appendChild(l),{c:l.getContext("2d"),width:l.width,height:l.height,id:l.id}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 32 */
/***/
function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.units,n=void 0===i?"rad":i,r=e.angle,o=void 0===r?Math.PI/2:r,s=e.code,a=void 0===s?function(){return console.log("rotated by: "+o)}:s,u=n.toUpperCase();return new Promise(function(e,i){"RAD"===u||"RADS"===u||"R"===u||"RADIANS"===u?(t.save(),t.rotate(o),a(),t.restore(),e("reset transformations")):"DEG"===u||"DEGS"===u||"D"===u||"DEGREES"===u?(t.save(),t.rotate(o*(Math.PI/180)),a(),t.restore(),e("reset transformations")):i({status:"ERROR",message:'units not recognised, please specify "deg" or "rad"'})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},/* 33 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// draw fill rectangle full size of canvas, colour default to light grey
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e7e7e7",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-left",n=t.canvas.clientWidth,r=t.canvas.clientHeight,o=null;switch(i){case"top-left":o=new s.default(t,0,0,n,r).draw(e);break;case"centre":o=new s.default(t,.5*-n,.5*-r,n,r).draw(e);break;default:console.log({status:"ERROR",message:'the anchor you have passed is not recognised, please select "top-left" or "centre"'})}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(23),s=n(o)},/* 34 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new circle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21;return new s.default(t,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(24),s=n(o)},/* 35 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new line, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:126,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(25),s=n(o)},/* 36 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new rectangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(23),s=n(o)},/* 37 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:21,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.PI,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:42;return new s.default(t,e,i,n,r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(26),s=n(o)},/* 38 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:42;return new s.default(t,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(27),s=n(o)},/* 39 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:24,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(28),s=n(o)},/* 40 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}
// create new right-angled triangle, draw to the given context
function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:42,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:42,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30;return new s.default(t,e,i,n,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(29),s=n(o)},/* 41 */
/***/
function(t,e,i){"use strict";var n={shapeFill:"rgba(200, 0, 100, .6)",outlines:{weight:3,colour:"#333"}};t.exports=n}]);
//# sourceMappingURL=scripts.js.map