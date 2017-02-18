'use strict';

import { bgSolid, circle, rect, triangleR, line } from './brush';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// global variables
const width = canvas.width;
const height = canvas.height;


bgSolid(canvas);
circle(ctx, 200, 200, 50).draw().outline();
line(ctx, 0, 0, width, height).draw().dist();
