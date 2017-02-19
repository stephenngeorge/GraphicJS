'use strict';

import brush from './brush';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// global variables
const width = canvas.width;
const height = canvas.height;


brush.bgSolid(canvas);

let pyramid = brush.triangleR(ctx, 100, 100, 200, 100).outline();
console.log(pyramid.angles('deg'));
