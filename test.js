'use strict';

import brush from './brush';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// global variables
const width = canvas.width;
const height = canvas.height;


brush.bgSolid(canvas);
let edge = brush.line(ctx, 150, 20, 32, 50).draw({weight: 2, colour: 'black'});
