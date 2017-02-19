'use strict';

import brush from './brush';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// global variables
const width = canvas.width;
const height = canvas.height;


brush.bgSolid(canvas);
let edge = brush.line(ctx, 50, 50, 200, 200).draw({weight: 1, colour: 'black'});
console.log(edge.xAngle('degrees'));
